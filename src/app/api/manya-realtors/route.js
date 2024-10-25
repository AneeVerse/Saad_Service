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
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
        }
        .info {
          margin-bottom: 15px;
        }
        .info span {
          font-weight: bold;
          color: #333;
        }
        @media only screen and (max-width: 600px) {
          .container {
            padding: 10px;
          }
          h2 {
            font-size: 20px;
          }
          p {
            font-size: 14px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Contact Form Submission</h2>
        <p>You have received a new contact form submission with the following details:</p>
        
        <div class="info">
          <p><span>Name:</span> ${data.name}</p>
        </div>
        
        <div class="info">
          <p><span>Phone:</span> ${data.phone}</p>
        </div>
        
        
        <div class="info">
          <p><span>Email:</span> ${data.email}</p>
        </div>
        
        
        <div class="info">
          <p><span>Message:</span> ${data.message && data.message }</p>
        </div>
  
        <p>Kind regards,<br>Your Website Team</p>
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
