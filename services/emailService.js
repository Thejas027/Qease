const nodemailer = require("nodemailer");

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // Use true for 465, false for 587 or other ports
  auth: {
    user: process.env.EMAIL_USER, // Sender's email address (from .env)
    pass: process.env.EMAIL_PASS, // Sender's email password (from .env)
  },
});

// Send email function
const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: `"Hospital/Clinic" <${process.env.EMAIL_USER}>`, // Sender address
      to, // Receiver address
      subject, // Subject line
      text, // Plain text body
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Failed to send email: ${error.message}`);
  }
};

module.exports = sendEmail;
