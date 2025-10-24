const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, callTime, service, businessSector, email, mobile } = req.body;

  if (!name || !callTime || !service || !email || !mobile) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // e.g., rudeacus@gmail.com
      pass: process.env.GMAIL_APP_PASSWORD, // App-specific password
    },
  });

  const emailContent = `
    New Consultation Request for Peak Ascension Digital!

    Consultation Details:
    - Name: ${name}
    - Call Time (GMT): ${callTime}
    - Service Required: ${service}
    - Business Sector: ${businessSector || 'Not specified'}
    - Email: ${email}
    - Mobile: ${mobile}

    Please contact the client to confirm their consultation. Visit https://padbpw.vercel.app for more info.

    Best,
    Peak Ascension Digital Team
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender (rudeacus@gmail.com)
    to: 'CalimoX@peakascension.dev, rudeacus@gmail.com', // Both recipients
    subject: 'New Consultation Request from Peak Ascension Digital',
    text: emailContent,
    html: `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Call Time (GMT):</strong> ${callTime}</p>
      <p><strong>Service Required:</strong> ${service}</p>
      <p><strong>Business Sector:</strong> ${businessSector || 'Not specified'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p>Please contact the client to confirm their consultation. Visit <a href="https://padbpw.vercel.app">our site</a> for more info.</p>
      <p>Best,<br>Peak Ascension Digital Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Consultation email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send consultation email' });
  }
}