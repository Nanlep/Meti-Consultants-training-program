import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import clientPromise from '../lib/mongodb.js';

const resend = new Resend(process.env.RESEND_API_KEY);
// Use environment variable for the domain, fallback to a placeholder if not set
const PUBLIC_URL = process.env.PUBLIC_URL || 'https://training.meti.pro';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Optional: Log lead to DB
    const client = await clientPromise;
    const db = client.db('meti-training');
    await db.collection('prospectus_leads').insertOne({
      email,
      requestedAt: new Date(),
    });

    // Send Syllabus Email
    await resend.emails.send({
      from: 'METI Admissions <contact@meti.pro>',
      to: email,
      subject: 'METI Program Prospectus & Syllabus',
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Program Syllabus</h2>
          <p>Thank you for your interest in the METI AI Revenue, Performance & Commercial Excellence Program.</p>
          <p>Please find the detailed track architecture and executive syllabus via the link below:</p>
          <br/>
          <a href="${PUBLIC_URL}/syllabus.html" style="background-color: #1e3a8a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Executive Syllabus</a>
          <br/><br/>
          <p>If you have questions regarding enterprise enrollment, please reply directly to this email.</p>
        </div>
      `
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Prospectus Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}