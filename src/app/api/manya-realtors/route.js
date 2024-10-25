import nodemailer from 'nodemailer';

// Handle POST request
export async function POST(request) {
  const data = await request.json(); // Get form data from frontend

  // Setup Nodemailer transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services too, e.g., Yahoo, Outlook
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your email address (the one that sends emails)
      pass: process.env.NEXT_PUBLIC_EMAIL_APP_PASS, // Your email password or app-specific password
    },
  });

  // Define the email options
  const mailOptions = {
    from: `"Manya Realtors" <${data.email}>`, // Sender's email & name
    to: 'abhi@aneeverse.com', // Receiver's email
    subject: 'New Contact Form Submission', // Email subject
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f7f7f7;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #ddd;
        }
        h2 {
          color: #333;
          font-size: 22px;
          margin: 0 0 20px;
          text-align: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #ddd;
          font-weight: 700;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin: 0;
          padding: 10px 0;
        }
        .info {
          font-size: 16px;
          margin: 10px 0;
          padding: 12px;
          background-color: #f9f9f9;
          border-left: 4px solid #4caf50;
          border-radius: 5px;
        }
        .info span.label {
          font-weight: bold;
          color: #333;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #888;
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #ddd;
        }
        @media only screen and (max-width: 600px) {
          .container {
            padding: 20px;
          }
          h2 {
            font-size: 20px;
          }
          p, .info {
            font-size: 14px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Contact Form Submission</h2>
        <p>Dear Admin,</p>
        <p>You have received a new contact form submission with the following details:</p>
        
        <div class="info">
          <span class="label">Name:</span> ${data.name}
        </div>
        
        <div class="info">
          <span class="label">Phone:</span> ${data.phone}
        </div>
        
        <div class="info">
          <span class="label">Email:</span> ${data.email}
        </div>
        
        <div class="info">
          <span class="label">Message:</span> ${data.message}
        </div>
      </div>
    </body>
    </html>
    `,
    text: `
    You have a new contact form submission:
    Name: ${data.name}
    Phone: ${data.phone}
    Email: ${data.email}
    Message: ${data.message}
  `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ msg: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ msg: 'Error sending email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Allow requests from any origin
        },
      }
    );
  }
}

// Handle OPTIONS request (for CORS preflight)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
