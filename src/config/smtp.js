const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  host: "smtp.gmail.com",
  port: 587,
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASS,
};
