import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  guestCount: number;
  driversFee: number;
  equipmentSetupFee: number;
  total: number;
  attendantsNeeded: number;
  phone?: string;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

const createEmailHTML = (data: QuoteEmailRequest) => {
  const formattedDate = formatDate(data.eventDate);
  const startTime = formatTime(data.startTime);
  const endTime = formatTime(data.endTime);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Custom Quote Details</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background-color: #1a1a1a;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #2d2d2d;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .header {
          background: linear-gradient(135deg, #1a1a1a, #333333);
          padding: 20px;
          text-align: center;
          border-bottom: 1px solid #444;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #4facfe;
        }
        .content {
          padding: 30px;
        }
        .greeting {
          font-size: 18px;
          color: #4facfe;
          margin-bottom: 20px;
          border-left: 3px solid #4facfe;
          padding-left: 15px;
        }
        .message {
          font-size: 16px;
          margin-bottom: 30px;
          color: #4facfe;
        }
        .quote-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          background-color: #1a1a1a;
          border-radius: 8px;
          overflow: hidden;
        }
        .quote-table th {
          background-color: #333;
          color: #ffffff;
          padding: 15px;
          text-align: center;
          font-weight: 600;
          border-bottom: 1px solid #555;
        }
        .quote-table td {
          padding: 15px;
          text-align: center;
          border-bottom: 1px solid #333;
          vertical-align: middle;
        }
        .quote-table tr:last-child td {
          border-bottom: none;
        }
        .event-date {
          color: #ffffff;
          font-weight: 500;
        }
        .guest-count {
          color: #ffffff;
          font-size: 24px;
          font-weight: bold;
        }
        .price-breakdown {
          text-align: left;
          color: #cccccc;
          font-size: 14px;
          line-height: 1.4;
        }
        .price-amount {
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
        }
        .total-row {
          background-color: #333;
          font-weight: bold;
        }
        .total-row td {
          color: #4facfe;
          font-size: 18px;
          border-top: 2px solid #4facfe;
        }
        .contact-section {
          margin-top: 30px;
          padding: 25px;
          background-color: #1a1a1a;
          border-radius: 8px;
          border-left: 4px solid #4facfe;
        }
        .contact-section p {
          margin: 8px 0;
          color: #4facfe;
        }
        .phone-link {
          color: #4facfe;
          text-decoration: none;
          font-weight: 600;
        }
        .phone-link:hover {
          text-decoration: underline;
        }
        .hours {
          color: #cccccc;
          font-size: 14px;
          margin-top: 15px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          background-color: #1a1a1a;
          color: #888;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Custom Quote Details</h1>
        </div>
        
        <div class="content">
          <div class="greeting">
            Hello ${data.firstName} ${data.lastName},
          </div>
          
          <div class="message">
            Your quote from Mister Valet Parking has arrived:
          </div>
          
          <table class="quote-table">
            <thead>
              <tr>
                <th>EVENT DATE</th>
                <th>GUEST COUNT</th>
                <th>PRICE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="event-date">
                  ${formattedDate}<br>
                  ${startTime} to ${endTime}
                </td>
                <td class="guest-count">${data.guestCount}</td>
                <td>
                  <div class="price-breakdown">
                    <strong>Drivers Fee</strong><br>
                    ( ${data.attendantsNeeded} drivers for ${data.startTime.split(':')[0] === data.endTime.split(':')[0] ? '1' : Math.abs(parseInt(data.endTime.split(':')[0]) - parseInt(data.startTime.split(':')[0]))} hours @<br>
                    $34.50 each / hr )<br>
                    <span style="color: #ff6b6b; font-size: 12px;">Minimum charge is ${data.attendantsNeeded} hours</span>
                  </div>
                  <div style="margin-top: 15px;">
                    <div class="price-breakdown">
                      <strong>Equipment Setup Fee</strong><br>
                      ( Valet Box, Signage, Cones, Valet Tickets/Lights, etc )
                    </div>
                  </div>
                </td>
                <td>
                  <div class="price-amount">${formatCurrency(data.driversFee)}</div>
                  <div style="margin-top: 30px;">
                    <div class="price-amount">${formatCurrency(data.equipmentSetupFee)}</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="total-row">
                <td colspan="3"><strong>Grand Total</strong></td>
                <td><strong>${formatCurrency(data.total)}</strong></td>
              </tr>
            </tfoot>
          </table>
          
          <div class="contact-section">
            <p>To book this event or for any other questions simply reply to this email. Our parking specialists are on standby 24/7.</p>
            <p>You can also call us at <a href="tel:+18328758743" class="phone-link">(832) 875-8743</a></p>
            <div class="hours">
              Monday-Friday 10am-6pm and Saturday 11am-3pm. We look forward to serving you at your event. Thank You
            </div>
          </div>
        </div>
        
        <div class="footer">
          © ${new Date().getFullYear()} Mister Valet Parking. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const data: QuoteEmailRequest = await req.json();

    console.log("Sending quote email to:", data.email);

    const emailResponse = await resend.emails.send({
      from: "Mister Valet Parking <onboarding@resend.dev>",
      to: [data.email],
      subject: "Your Custom Quote from Mister Valet Parking",
      html: createEmailHTML(data),
    });

    console.log("Quote email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);