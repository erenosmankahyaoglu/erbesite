import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { generateContactEmailTemplate } from "@/lib/mail-template";

type Data = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: "Sadece POST istekleri kabul edilir.", success: false });
  }

  const { name, email, subject, phone, message } = req.body;

  // Temel doğrulama
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Lütfen gerekli alanları doldurun.", success: false });
  }

  try {
    // SMTP Ayarları (Placeholder - Kullanıcı tarafından .env.local dosyasına eklenmeli)
    // Örn: Gmail, Outlook veya özel bir SMTP sunucusu
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "mail2.webservis.com.tr",
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true, // Port 465 (SSL) kullandığınız için her zaman true olmalı
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailHtml = generateContactEmailTemplate({
      name,
      email,
      subject,
      phone,
      message,
    });

    // E-posta gönderimi
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Gönderen
      to: "info@erbemakine.com", // Alıcı (Şirket maili)
      replyTo: email, // Kullanıcının e-postası (Cevapla dendiğinde ona gitsin)
      subject: subject || "Yeni İletişim Formu Mesajı",
      html: emailHtml,
    });

    return res
      .status(200)
      .json({ message: "Mesajınız başarıyla gönderildi.", success: true });
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    return res.status(500).json({
      message: "Bir hata oluştu, lütfen daha sonra tekrar deneyin.",
      success: false,
    });
  }
}
