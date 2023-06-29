import { transporter, mailOptions } from "@/config/nodemailer.config";

export const POST = async (req: any) => {
  const request = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Portfolio - ${request.email}`,
      text: request.message,
      html: `<pre>${request.message}</pre>`,
    })
  } catch (error) {
    return new Response("Something went wrong sending the request", { status: 500 })
  }
  
  return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
}