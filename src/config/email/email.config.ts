import sgMail from '@sendgrid/mail';
if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM) {
  throw new Error(
    'SENDGRID_API_KEY or SENDGRID_FROM is missing in environment variables',
  );
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default sgMail;
