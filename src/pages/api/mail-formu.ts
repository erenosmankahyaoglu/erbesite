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
    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASSWORD;

    if (!host || !port || !user || !pass) {
      console.error("Missing email configuration environment variables");
      return res.status(500).json({
        message: "E-posta yapılandırması eksik.",
        success: false,
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 SSL için true, 587 TLS için genellikle false (veya starttls kullanır)
      auth: {
        user,
        pass,
      },
      // Bağlantı zaman aşımı ve hata detayları için ek ayarlar
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
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
      from: `"${name}" <${user}>`, // Gönderen
      to: "info@erbemakine.com", // Alıcı (Şirket maili)
      replyTo: email, // Kullanıcının e-postası (Cevapla dendiğinde ona gitsin)
      subject: subject || "Yeni İletişim Formu Mesajı",
      html: emailHtml,
    });

    return res
      .status(200)
      .json({ message: "Mesajınız başarıyla gönderildi.", success: true });
  } catch (error: any) {
    console.error("Email gönderme hatası detayı:", {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
      message: error.message
    });
    return res.status(500).json({
      message: "Mesaj gönderilirken bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyin.",
      success: false,
    });
  }
}
