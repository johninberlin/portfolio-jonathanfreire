
export default async function email(req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.TRANSPORTER_USER,
      pass: process.env.TRANSPORTER_PASSWORD,
    },
    secure: true,
  });
  const {name, email, message} = req.body;
  const mailData = {
    from : "Contact form: <noreply.jonathanfreire@gmail.com>",
    to: process.env.TRANSPORTER_USER,
    subject: `Message from ${name}: ${email}`,
    text: message,
    html: `<div><p>${message}</p></div>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err){
      console.log(err);
    }else{
      console.log("sended");
    }
  })
  res.status(200).json({});
}