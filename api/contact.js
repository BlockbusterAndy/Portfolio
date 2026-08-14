import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildEmailHtml({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@400;500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <!--<![endif]-->
  </head>
  <body style="margin:0;padding:0;background-color:#f9f9f9;font-family:'Manrope',Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9f9f9;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border:1px solid #c6c6c6;">
            <tr>
              <td style="padding:32px 40px 24px;border-bottom:1px solid #c6c6c6;">
                <p style="margin:0 0 12px;color:#474747;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Portfolio &mdash; Contact Form</p>
                <h1 style="margin:0;color:#000000;font-family:'Newsreader',Georgia,'Times New Roman',serif;font-size:30px;font-weight:500;line-height:1.25;">New message from ${safeName}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom:20px;">
                      <p style="margin:0 0 4px;color:#474747;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">From</p>
                      <p style="margin:0;color:#1a1c1c;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:15px;">${safeName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:24px;">
                      <p style="margin:0 0 4px;color:#474747;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Email</p>
                      <p style="margin:0;">
                        <a href="mailto:${safeEmail}" style="color:#000000;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:15px;text-decoration:underline;">${safeEmail}</a>
                      </p>
                    </td>
                  </tr>
                </table>
                <div style="border-top:1px solid #c6c6c6;padding-top:24px;padding-bottom:8px;">
                  <p style="margin:0 0 8px;color:#474747;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;">Message</p>
                  <p style="margin:0;color:#1a1c1c;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;white-space:pre-wrap;">${safeMessage}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px 36px;">
                <a href="mailto:${safeEmail}" style="display:inline-block;background-color:#000000;color:#e2e2e2;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;text-decoration:none;padding:14px 28px;border-radius:0;">Reply to ${safeName}</a>
              </td>
            </tr>
          </table>
          <p style="margin:24px 0 0;color:#777777;font-family:'Manrope',Arial,Helvetica,sans-serif;font-size:12px;">Sent from the contact form on your portfolio site.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name} via portfolio`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: buildEmailHtml({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: 'Failed to send message' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
