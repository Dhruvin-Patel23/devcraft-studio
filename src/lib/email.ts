import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.RESEND_FROM_EMAIL || 'hello@devcraftstudio.com';

interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  description: string;
  referenceUrl?: string;
}

export async function sendContactNotification(data: ContactEmailData) {
  try {
    await resend.emails.send({
      from: `DevCraft Studio <${fromEmail}>`,
      to: [process.env.RESEND_FROM_EMAIL || 'hello@devcraftstudio.com'],
      subject: `New Project Inquiry from ${data.name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #18181b; border-bottom: 2px solid #e4e4e7; padding-bottom: 12px;">
            New Project Inquiry
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #18181b; font-weight: 500;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a></td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Company</td>
              <td style="padding: 8px 0; color: #18181b;">${data.company}</td>
            </tr>` : ''}
            ${data.phone ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Phone</td>
              <td style="padding: 8px 0; color: #18181b;">${data.phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Project Type</td>
              <td style="padding: 8px 0; color: #18181b;">${data.projectType}</td>
            </tr>
            ${data.budget ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Budget</td>
              <td style="padding: 8px 0; color: #18181b;">${data.budget}</td>
            </tr>` : ''}
            ${data.timeline ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Timeline</td>
              <td style="padding: 8px 0; color: #18181b;">${data.timeline}</td>
            </tr>` : ''}
            ${data.referenceUrl ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Reference</td>
              <td style="padding: 8px 0;"><a href="${data.referenceUrl}" style="color: #2563eb;">${data.referenceUrl}</a></td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #f4f4f5; border-radius: 8px;">
            <h3 style="color: #18181b; margin: 0 0 8px 0; font-size: 14px;">Project Description</h3>
            <p style="color: #3f3f46; margin: 0; line-height: 1.6;">${data.description}</p>
          </div>

          <p style="margin-top: 24px; color: #a1a1aa; font-size: 12px;">
            This email was sent from the DevCraft Studio contact form.
          </p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send contact notification:', error);
    return { success: false, error };
  }
}

export async function sendContactConfirmation(data: { name: string; email: string }) {
  try {
    await resend.emails.send({
      from: `DevCraft Studio <${fromEmail}>`,
      to: [data.email],
      subject: 'Thanks for reaching out — DevCraft Studio',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #18181b;">Thanks for reaching out, ${data.name}!</h2>
          
          <p style="color: #3f3f46; line-height: 1.6;">
            We've received your project inquiry and will get back to you within 24-48 hours.
          </p>
          
          <p style="color: #3f3f46; line-height: 1.6;">
            In the meantime, feel free to check out our recent work on our website.
          </p>

          <p style="color: #3f3f46; line-height: 1.6; margin-top: 24px;">
            Best regards,<br/>
            <strong>The DevCraft Studio Team</strong>
          </p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    return { success: false, error };
  }
}
