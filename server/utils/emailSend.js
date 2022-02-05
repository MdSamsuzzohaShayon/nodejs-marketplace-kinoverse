const nodemailer = require('nodemailer');

const emailSend = async (subject, text, html) => {


    // create reusable transporter object using the default transport
    let transporter = nodemailer.createTransport({
        // host: "localhost",
        service: "gmail",
        port: 465,
        secure: false, // true for 465, false for other ports
        auth: {
            // SENDER EMAIL AND PASSWORD
            user: process.env.EMAIL,   // generated ethereal user
            pass: process.env.PASSWORD   // generated ethereal password
        }
    });



    const message = {
        // SENDER MAIL
        from: process.env.EMAIL,
        //  REVICER MAIL
        // to: "mdshayon0@gmail.com",
        to: process.env.RECEVER_EMAIL,
        subject,
        text,
        html
    };



    try {
        // send mail with defined transport object
        let info = await transporter.sendMail(message);
        console.log(info);
    } catch (error) {
        console.log("error: ", error);
    }
    transporter.close();
}


module.exports = emailSend;