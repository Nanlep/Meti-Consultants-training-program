<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Meti Training Program

A high-conversion executive landing page for the AI Revenue, Performance & Commercial Excellence Program. This project uses React (Vite) for the frontend and Vercel Serverless Functions for backend logic (MongoDB storage + Resend Email API).

## Setup & Local Development

### Prerequisites
1. **Node.js**: Installed on your machine.
2. **MongoDB Atlas**: A cluster set up with a database user.
3. **Resend Account**: An API key from [Resend](https://resend.com) for sending transactional emails.

### 1. Environment Variables
Create a `.env` file in the root directory (do not commit this file):

```bash
# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority

# Resend (Email Service)
RESEND_API_KEY=re_123456789...

# App Configuration
METI_OFFICIAL_EMAIL=admin@yourdomain.com
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Full Stack)
To run both the React frontend and the backend API routes locally, use the Vercel CLI. This replicates the production environment where API functions live in `/api`.

Since the Vercel CLI is installed as a project dependency, use `npx`:

```bash
npx vercel dev
```
Access the app at `http://localhost:3000`. 
API endpoints will be available at:
- `http://localhost:3000/api/apply`
- `http://localhost:3000/api/prospectus`

*Note: Running `npm run dev` (Vite only) will start the frontend, but API calls will fail because Vite does not host the `/api` directory server-side logic by default.*

## Deployment

### Deploy to Vercel

1. **Push to GitHub**: Commit your changes.
2. **Import Project**: Log in to Vercel and import the repository.
3. **Configure Environment Variables**: In the Vercel project settings, add the variables from your `.env` file:
   - `MONGODB_URI`
   - `RESEND_API_KEY`
   - `METI_OFFICIAL_EMAIL`
4. **Deploy**: Vercel will automatically detect the Vite framework and the `api/` directory for serverless functions.

### Testing Live Endpoints
Once deployed:
1. Open the live URL.
2. Open the "Apply Now" modal, fill in details (including phone), and submit.
   - **Verify**: Check MongoDB Atlas `applications` collection for the new entry.
   - **Verify**: Check the inbox of the email provided and the Admin email.
3. Open the "Prospectus" modal, enter an email, and submit.
   - **Verify**: Check inbox for the syllabus email.
