import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { firstname, lastname, email, phone, message, subject } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        const mailBody = `
            Nom: ${firstname} ${lastname}\n
            Email: ${email}\n
            Phone Number: ${phone}\n
            Message:\n
            ${message}
        `;

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_DEST,
            subject: "Contact from portfolio",
            text: mailBody
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent:", info.response);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
    }
}
