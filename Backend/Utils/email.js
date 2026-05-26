import nodemailer from "nodemailer";

const myEmail = "modupeoluwadorcas142@gmail.com";
const transporter = nodemailer.createTransport({
  host: "smpt.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: myEmail,
    pass: "iuwnvgcxqivpnixw",
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("smpt", error);
  } else {
    console.log(" SMPT Connected successfully");
  }
});

export const welcomeEmail = (userEmail,firstName ) => {
  try {
    const mailOption = {
      to: userEmail,
      from: myEmail,
      html:`
      <div>
      <h1>Welcome to Spendly</h1>
      </div>
      `
    }
  } catch (error) {}
};
