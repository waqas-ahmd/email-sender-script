import nodemailer from "nodemailer";
import { SENDER_MAIL, SENDER_PASSWORD } from "./config.js";

export const sendMail = async (to, subject, html) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SENDER_MAIL,
      pass: SENDER_PASSWORD,
    },
  });

  var mailOptions = {
    from: SENDER_MAIL,
    to,
    subject,
    html,
  };
  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return {success:false}
  }
};