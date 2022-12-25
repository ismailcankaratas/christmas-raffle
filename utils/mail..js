import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

export function sendMail({ to, token, mailtype }) {
    let mailOptions = {
        from: "iguinovasyon@gmail.com",
        to: to,
        subject: "Gedik Yılbaşı Çekilişi'ne katılmak için son adım!",
        html: `<a href="${process.env.BASE_URL}/?key=${token}">Tıkla</a>`
    }
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) console.log(err);
        console.log(data);
    });
}

