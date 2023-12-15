const nodemailer = require('nodemailer');

const sendMail = async (nim, uniqueCode) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: nim + '@student.universitaspertamina.ac.id',
        subject: 'Unique Code',
        text: 'Your unique code is ' + uniqueCode
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

module.exports = sendMail;