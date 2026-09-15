import nodemailer from "nodemailer";

export interface FeasibilityData {
  name: string;
  company: string;
  email: string;
  country: string;
  sampleType: string;
  audience: string;
  completes: string;
  loi?: string;
  ir?: string;
  methodology?: string;
  timeline?: string;
  surveyLink?: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.in",
  port: Number(process.env.ZOHO_SMTP_PORT) || 465,
  secure: process.env.ZOHO_SMTP_SECURE !== "false", // true for 465, false for 587
  auth: {
    user: process.env.ZOHO_USER || "info@inexraresearch.com",
    pass: process.env.ZOHO_PASSWORD,
  },
});

export async function sendFeasibilityEmail(data: FeasibilityData) {
  const recipient = process.env.NOTIFICATION_RECEIVER || "info@inexraresearch.com";
  const sender = process.env.ZOHO_USER || "info@inexraresearch.com";

  // 1. Email to Inexra Team (Admin Notification)
  const adminHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
          .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #0B1C30 0%, #1A365D 100%); padding: 32px 28px; text-align: left; }
          .header h1 { color: #ffffff; margin: 0 0 6px 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
          .header p { color: #4FD1C5; margin: 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
          .content { padding: 32px 28px; }
          .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; background: #ecfdf5; color: #047857; font-weight: 600; font-size: 12px; margin-bottom: 20px; }
          .section-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0D9488; margin-top: 24px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
          .table-row { display: flex; padding: 8px 0; border-bottom: 1px solid #f8fafc; }
          .table-label { width: 38%; font-weight: 600; color: #64748b; font-size: 13px; }
          .table-value { width: 62%; font-weight: 500; color: #0f172a; font-size: 14px; word-break: break-word; }
          .criteria-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; font-size: 14px; color: #334155; line-height: 1.6; margin-top: 8px; white-space: pre-wrap; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 28px; font-size: 12px; color: #94a3b8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <p>Inexra Research & Analytics</p>
            <h1>New Feasibility Request Received</h1>
          </div>
          <div class="content">
            <div class="badge">Urgent Feasibility Inquiry</div>

            <div class="section-title">Client Information</div>
            <div class="table-row">
              <div class="table-label">Full Name:</div>
              <div class="table-value"><strong>${data.name}</strong></div>
            </div>
            <div class="table-row">
              <div class="table-label">Company / Agency:</div>
              <div class="table-value">${data.company}</div>
            </div>
            <div class="table-row">
              <div class="table-label">Work Email:</div>
              <div class="table-value"><a href="mailto:${data.email}" style="color: #0D9488; text-decoration: none; font-weight: 600;">${data.email}</a></div>
            </div>
            <div class="table-row">
              <div class="table-label">Target Country:</div>
              <div class="table-value">${data.country}</div>
            </div>

            <div class="section-title">Study Parameters</div>
            <div class="table-row">
              <div class="table-label">Sample Category:</div>
              <div class="table-value"><span style="text-transform: capitalize; font-weight: 600;">${data.sampleType}</span></div>
            </div>
            <div class="table-row">
              <div class="table-label">Completes Target (n=):</div>
              <div class="table-value"><strong>${data.completes}</strong></div>
            </div>
            <div class="table-row">
              <div class="table-label">LOI (Length of Survey):</div>
              <div class="table-value">${data.loi ? `${data.loi} mins` : "Not specified"}</div>
            </div>
            <div class="table-row">
              <div class="table-label">Est. Incidence (IR %):</div>
              <div class="table-value">${data.ir ? `${data.ir}%` : "Not specified"}</div>
            </div>
            <div class="table-row">
              <div class="table-label">Methodology:</div>
              <div class="table-value" style="text-transform: capitalize;">${data.methodology || "Online"}</div>
            </div>
            <div class="table-row">
              <div class="table-label">Expected Timeline:</div>
              <div class="table-value">${data.timeline || "Not specified"}</div>
            </div>
            ${
              data.surveyLink
                ? `
            <div class="table-row">
              <div class="table-label">Survey / Screener Link:</div>
              <div class="table-value"><a href="${data.surveyLink}" target="_blank" style="color: #0D9488;">${data.surveyLink}</a></div>
            </div>`
                : ""
            }

            <div class="section-title">Target Profile & Screener Details</div>
            <div class="criteria-box">${data.audience}</div>
          </div>
          <div class="footer">
            Submitted via Inexra Website (inexraresearch.com) &bull; ${new Date().toUTCString()}
          </div>
        </div>
      </body>
    </html>
  `;

  // Send Admin Notification
  const adminMail = await transporter.sendMail({
    from: `"Inexra Feasibility Desk" <${sender}>`,
    to: recipient,
    replyTo: data.email,
    subject: `[New Feasibility] ${data.company} - ${data.name} (n=${data.completes} in ${data.country})`,
    html: adminHtml,
  });

  // 2. Automated Confirmation Email to Client
  try {
    const clientHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; }
            .header { background: #0B1C30; padding: 32px 28px; text-align: left; }
            .header h1 { color: #ffffff; margin: 0 0 6px 0; font-size: 20px; font-weight: 700; }
            .header p { color: #4FD1C5; margin: 0; font-size: 13px; font-weight: 600; text-transform: uppercase; }
            .content { padding: 32px 28px; line-height: 1.6; }
            .highlight { background: #f0fdfa; border-left: 4px solid #0D9488; padding: 14px 18px; border-radius: 4px; margin: 20px 0; }
            .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 28px; font-size: 12px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <p>Inexra Research & Analytics</p>
              <h1>We Have Received Your Feasibility Request</h1>
            </div>
            <div class="content">
              <p>Hi <strong>${data.name}</strong>,</p>
              <p>Thank you for reaching out to Inexra Research & Analytics. We have successfully logged your study parameters for <strong>${data.company}</strong>.</p>
              
              <div class="highlight">
                <p style="margin: 0; font-weight: 600; color: #0f766e;">What happens next?</p>
                <p style="margin: 4px 0 0 0; font-size: 14px; color: #115e59;">
                  Our feasibility desk is currently reviewing panel incidence, sample availability, and CPI for your study in <strong>${data.country}</strong>. You will hear back from us typically within <strong>45 minutes</strong> during standard business hours.
                </p>
              </div>

              <p style="font-size: 14px; color: #475569;">
                If you have additional screener documents, questionnaires, or urgent timelines, simply reply directly to this email or write to <a href="mailto:info@inexraresearch.com" style="color: #0D9488;">info@inexraresearch.com</a>.
              </p>
              <br>
              <p style="margin: 0; font-weight: 600; color: #0B1C30;">Best regards,</p>
              <p style="margin: 0; color: #64748b; font-size: 14px;">The Inexra Research Operations Team</p>
            </div>
            <div class="footer">
              Inexra Research & Analytics &bull; Precision Sample & Quantitative Data Operations<br>
              <a href="https://inexraresearch.com" style="color: #0D9488; text-decoration: none;">www.inexraresearch.com</a>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Inexra Research & Analytics" <${sender}>`,
      to: data.email,
      subject: `Feasibility Request Received - Inexra Research [${data.company}]`,
      html: clientHtml,
    });
  } catch (clientErr) {
    console.warn("Could not send client acknowledgment email:", clientErr);
    // Non-blocking: admin email was already sent successfully
  }

  return adminMail;
}
