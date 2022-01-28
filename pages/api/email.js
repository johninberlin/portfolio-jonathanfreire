
export default async function email(req, res) {
  const mail = require("@sendgrid/mail");
  mail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const {name, email, message} = req.body;
  const mailData = {
    from : process.env.SENDER_EMAIL_ADDRESS,
    to: process.env.SENDER_EMAIL_ADDRESS,
    subject: `Message from ${name}: ${email}`,
    text: message,
    html: `<div><p>${message}</p></div>`
  }

  mail.send(mailData).then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
  res.status(200).json({});
}