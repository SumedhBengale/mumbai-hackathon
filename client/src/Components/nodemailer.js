const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: "birbal_auto@outlook.com",
        pass: "1234birbal"
    }
});

const options={
    from: "birbal_auto@outlook.com",
    to: 'ssbengale@gmail.com',
    subject: 'Sending first automated mail',
    text: 'Hello World'
};

const SendMail=transporter.sendMail(options, function (err,info) {
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent:" + info.response);
})

SendMail()