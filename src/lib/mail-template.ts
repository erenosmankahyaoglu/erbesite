/**
 * Generates a high-end premium Light Mode HTML email template.
 * Uses table-based layout for maximum compatibility across email clients (Outlook, Gmail, etc).
 */
export const generateContactEmailTemplate = (data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
}) => {
  const { name, email, subject, message, phone } = data;
  const date = new Date().toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="tr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yeni İletişim Formu Mesajı</title>
    <!--[if mso]>
    <style type="text/css">
    body, table, td, span, a, h1, h2, p {font-family: Arial, Helvetica, sans-serif !important;}
    </style>
    <![endif]-->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
    </style>
</head>
<body style="font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; -webkit-font-smoothing: antialiased;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f8fafc;">
        <tr>
            <td align="center" style="padding-bottom: 60px;">
                <!-- Main Container -->
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="width: 100%; max-width: 600px; margin: 0 auto;">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 50px 0 30px;">
                            <h1 style="color: #0f172a; font-size: 32px; font-weight: 700; letter-spacing: 4px; margin: 0; text-transform: uppercase;">ERBE</h1>
                        </td>
                    </tr>

                    <!-- Paper Card -->
                    <tr>
                        <td style="padding: 0 20px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                                <!-- Accent Bar -->
                                <tr>
                                    <td height="6" style="background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%); line-height: 6px; font-size: 1px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding: 40px;">
                                        <h2 style="color: #0f172a; font-size: 24px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.5px;">Yeni Mesaj Talebi</h2>
                                        <p style="color: #64748b; font-size: 15px; margin: 0 0 40px 0;">Web sayfanızdaki iletişim formundan bir mesajınız var.</p>

                                        <!-- Data List -->
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 40px;">
                                            <!-- Row: Name -->
                                            <tr>
                                                <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                                                    <span style="color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; display: block;">İSİM SOYİSİM</span>
                                                    <span style="color: #1e293b; font-size: 16px; font-weight: 500;">${name}</span>
                                                </td>
                                            </tr>
                                            <!-- Row: Email -->
                                            <tr>
                                                <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                                                    <span style="color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; display: block;">E-POSTA</span>
                                                    <span style="color: #1e293b; font-size: 16px; font-weight: 500;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a></span>
                                                </td>
                                            </tr>
                                            <!-- Row: Phone -->
                                            ${
                                              phone
                                                ? `
                                            <tr>
                                                <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                                                    <span style="color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; display: block;">TELEFON NUMARASI</span>
                                                    <span style="color: #1e293b; font-size: 16px; font-weight: 500;">${phone}</span>
                                                </td>
                                            </tr>
                                            `
                                                : ""
                                            }
                                            <!-- Row: Subject -->
                                            ${
                                              subject
                                                ? `
                                            <tr>
                                                <td style="padding: 16px 0; border-bottom: 1px solid #f1f5f9;">
                                                    <span style="color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; display: block;">KONU</span>
                                                    <span style="color: #1e3a8a; font-size: 16px; font-weight: 500;">${subject}</span>
                                                </td>
                                            </tr>
                                            `
                                                : ""
                                            }
                                            <!-- Row: Date -->
                                            <tr>
                                                <td style="padding: 16px 0;">
                                                    <span style="color: #94a3b8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 4px; display: block;">GÖNDERİM TARİHİ</span>
                                                    <span style="color: #1e293b; font-size: 16px; font-weight: 500;">${date}</span>
                                                </td>
                                            </tr>
                                        </table>

                                        <!-- Message Section -->
                                        <span style="color: #1e3a8a; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; display: inline-block; margin-bottom: 16px;">MÜŞTERİ MESAJI</span>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-radius: 16px; border: 1px solid #f1f5f9;">
                                            <tr>
                                                <td style="padding: 24px; color: #334155; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">${message}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" style="padding: 40px 20px;">
                            <p style="color: #94a3b8; font-size: 12px; margin: 5px 0; letter-spacing: 0.3px;">Bu e-posta <span style="color: #1e3a8a; font-weight: 600;">Erbe Makine</span> web sitesi üzerinden iletilmiştir.</p>
                            <p style="color: #94a3b8; font-size: 12px; margin: 5px 0; letter-spacing: 0.3px;">&copy; ${new Date().getFullYear()} ERBE. Tüm Hakları Saklıdır.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
};
