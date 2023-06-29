import nodemailer from "nodemailer";

const username = process.env.NODEMAILER_USER;
const password = process.env.NODEMAILER_PASS

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: username,
    pass: password
  }
});

export const mailOptions = {
  from: username,
  to: username
}