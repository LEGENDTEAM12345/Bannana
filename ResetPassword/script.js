

function ValidateEmail(inputText) {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {

        document.form1.text1.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }

}

function ValidateEmail1(inputText) {
    const mailformat1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat1)) {

        document.form2.text2.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form2.text2.focus();
        return false;
    }

}

function SendOTP() {
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'karthikeya.manas@gmail.com',
            pass: 'karthi0709'
        }
    });

    const mailOptions = {
        from: 'karthikeya.manas@gmail.com',
        to: 'karthikeya.manas@outlook.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}