// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourgmail@gmail.com", // 🔹 replace with your Gmail
        pass: "your-app-password",   // 🔹 NOT your Gmail password, use app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: "yourgmail@gmail.com", // 🔹 where you want to receive
      subject: `Message from ${name}`,
      text: `Phone: ${phone}\nMessage: ${message}`,
    });

    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
