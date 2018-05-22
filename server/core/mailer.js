const nodemailer = require('nodemailer');

const account = {
  user: "testmailer555444@gmail.com",
  pass: "KickAss98"
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: account.user, // generated ethereal user
    pass: account.pass // generated ethereal password
  }
});

// setup email data with unicode symbols
/*
let mailOptions = {
  from: 'Test', // sender address
  to: "temaskok98@gmail.com", // list of receivers
  subject: "Test", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>" // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
*/

module.exports = transporter;