import nodemailer from 'nodemailer';

export async function POST(request) {
  const data = await request.json();

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_APP_PASS,
    },
  });

  // Email options
  const mailOptions = {   
    from: `"FAAD SERVICE" <${data.email}>`, // Sender's name and email
    to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER, // Receiver's email (your email)
    subject: 'New Contact Form Submission',
    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    </div>
    `,
    text: `New submission from ${data.name} (${data.email}, ${data.phone}): ${data.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ msg: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ msg: 'Error sending email' }), {
      status: 500,
    });
  }
}
