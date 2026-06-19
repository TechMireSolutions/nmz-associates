"use server";

import nodemailer from "nodemailer";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fields?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name    = (formData.get("name")    as string | null)?.trim() ?? "";
  const email   = (formData.get("email")   as string | null)?.trim() ?? "";
  const company = (formData.get("company") as string | null)?.trim() ?? "";
  const subject = (formData.get("subject") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // Validation
  if (!name || !email || !subject || !message) {
    return {
      status: "error",
      message: "Please fill in all required fields.",
      fields: { name, email, company, subject, message },
    };
  }

  if (!EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
      fields: { name, email, company, subject, message },
    };
  }

  if (message.length < 10) {
    return {
      status: "error",
      message: "Please write a message of at least 10 characters.",
      fields: { name, email, company, subject, message },
    };
  }

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"NMZ Associates Website" <${process.env.GMAIL_USER}>`,
      to: "nmzassociates@gmail.com",
      replyTo: email,
      subject: `[Contact Form] ${subject} – from ${name}`,
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          <div style="background: #384E8E; padding: 24px 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
            <p style="color: #B1DAEB; margin: 4px 0 0; font-size: 13px;">NMZ Associates Website</p>
          </div>
          <div style="padding: 32px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #464646;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEB; font-weight: 600; width: 120px; color: #384E8E;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEB;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEB; font-weight: 600; color: #384E8E;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEB;"><a href="mailto:${email}" style="color: #EF773A;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEB; font-weight: 600; color: #384E8E;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEB;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEB; font-weight: 600; color: #384E8E;">Subject</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEB;">${subject}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <p style="font-weight: 600; color: #384E8E; margin: 0 0 8px;">Message</p>
              <div style="background: #f4f6fb; border-left: 4px solid #EF773A; padding: 16px; border-radius: 4px; color: #464646; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #EBEBEB;">
              <a href="mailto:${email}" style="display: inline-block; background: #384E8E; color: #ffffff; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Reply to ${name}
              </a>
            </div>
          </div>
          <div style="background: #EBEBEB; padding: 16px 32px; text-align: center;">
            <p style="color: #888; font-size: 12px; margin: 0;">This email was sent from the contact form at nmzassociates.com</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission
===========================
Name:    ${name}
Email:   ${email}
${company ? `Company: ${company}\n` : ""}Subject: ${subject}

Message:
${message}

---
Reply directly to: ${email}
      `.trim(),
    });

    return {
      status: "success",
      message: "Thank you! We'll be in touch within one business day.",
    };
  } catch (err) {
    console.error("Contact form email error:", err);
    return {
      status: "error",
      message: "Failed to send your message. Please email us directly at nmzassociates@gmail.com",
      fields: { name, email, company, subject, message },
    };
  }
}
