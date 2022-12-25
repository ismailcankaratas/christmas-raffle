import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

export function sendMail({ subject, to, html, mailtype }) {
    let mailOptions = {
        from: process.env.MAIL_USER,
        to: to,
        subject,
        html,
    }
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) console.log(err);
        console.log(data);
    });
}

