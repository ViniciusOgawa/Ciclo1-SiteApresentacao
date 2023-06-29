const nodemailer = require("nodemailer");
const SMPT_CONFIG = require("../../config/smtp");

const sendEmailService = async ({ text, subject, from, name }) => {
  const transporter = nodemailer.createTransport({
    host: SMPT_CONFIG.host,
    port: SMPT_CONFIG.port,
    secure: false,
    auth: {
      user: SMPT_CONFIG.user,
      pass: SMPT_CONFIG.password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailSent = await transporter.sendMail({
    text: text,
    subject: subject,
    from: `${name} <${from}>`,
    to: "viniogawa321@gmail.com",
  });

  console.log(mailSent);
};

module.exports = {
  sendEmailService,
};
