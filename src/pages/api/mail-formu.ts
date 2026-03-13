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
    const host = process.env.EMAIL_HOST?.replace(/['"]/g, "");
    const port = Number(process.env.EMAIL_PORT?.replace(/['"]/g, ""));
    const user = process.env.EMAIL_USER?.replace(/['"]/g, "");
    const pass = process.env.EMAIL_PASSWORD?.replace(/['"]/g, "");

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
      secure: port === 465, // 465 için true, 587 için false olmalı
      auth: {
        user,
        pass,
      },
      // Bazı sunucular PLAIN yerine LOGIN methodunu zorunlu tutar
      authMethod: 'LOGIN',
      tls: {
        rejectUnauthorized: false,
        // Bazı sunucular eski şifreleme yöntemlerini (SSLv3 vb.) dahi isteyebiliyor
        minVersion: 'TLSv1'
      },
      debug: true,
      logger: true,
      connectionTimeout: 20000,
      greetingTimeout: 10000,
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
      from: user, // Gönderen kısmını sadeleştirelim, isim bazen auth'u bozar
      to: "info@erbemakine.com",
      replyTo: email,
      subject: subject || `${name} - Yeni İletişim Formu`,
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
