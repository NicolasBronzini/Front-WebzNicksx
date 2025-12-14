import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

// Disable body parsing, we'll use formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse form data with file
    const form = formidable({ maxFileSize: 5 * 1024 * 1024 }); // 5MB max

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Extract form fields (formidable returns arrays)
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const linkedin = Array.isArray(fields.linkedin) ? fields.linkedin[0] : fields.linkedin;
    const portfolio = Array.isArray(fields.portfolio) ? fields.portfolio[0] : fields.portfolio;
    const message = Array.isArray(fields.message) ? fields.message[0] : fields.message;

    // Get CV file
    const cvFile = files.cv ? (Array.isArray(files.cv) ? files.cv[0] : files.cv) : null;

    // Configure nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use App Password, not regular password
      },
    });

    // Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nicolasbronzini7@gmail.com',
      subject: `Nueva postulación de ${name}`,
      html: `
        <h2>Nueva Postulación - WebzNick</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'No proporcionado'}</p>
        <p><strong>Portafolio:</strong> ${portfolio || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        ${cvFile ? '<p><strong>CV adjunto en este email</strong></p>' : '<p><em>No se adjuntó CV</em></p>'}
      `,
      replyTo: email,
    };

    // Add attachment if CV file exists
    if (cvFile && cvFile.filepath) {
      mailOptions.attachments = [
        {
          filename: cvFile.originalFilename || 'cv.pdf',
          path: cvFile.filepath,
        },
      ];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up temp file
    if (cvFile && cvFile.filepath) {
      fs.unlinkSync(cvFile.filepath);
    }

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
