import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import clientPromise from '../lib/mongodb.js';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.METI_OFFICIAL_EMAIL || 'contact@meti.pro';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company } = req.body;

    if (!name || !email || !phone || !company) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // 1. Save to MongoDB
    const client = await clientPromise;
    const db = client.db('meti-training');
    await db.collection('applications').insertOne({
      name,
      email,
      phone,
      company,
      submittedAt: new Date(),
    });

    // 2. Send Admin Notification
    await resend.emails.send({
      from: 'METI Admissions <contact@meti.pro>',
      to: ADMIN_EMAIL,
      subject: `New Application: ${name} (${company})`,
      html: `
        <h1>New Program Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company/Title:</strong> ${company}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    });

    // 3. Send User Confirmation
    await resend.emails.send({
      from: 'METI Admissions <contact@meti.pro>',
      to: email,
      subject: 'Application Received - METI Training Program',
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Application Received</h2>
          <p>Dear ${name},</p>
          <p>Thank you for applying to the METI AI Revenue & Commercial Excellence Program.</p>
          <p>Our admissions team has received your details and will review your profile. You can expect to hear from us within 24 business hours to schedule a brief discovery call.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">METI Training Program</p>
        </div>
      `
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Application Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}