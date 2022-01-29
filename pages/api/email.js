
export default async function email(req, res) {
  const mail = require("@sendgrid/mail");
  mail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);
  const {name, email, message} = req.body;
  const mailData = {
    from : process.env.SENDER_EMAIL_ADDRESS,
    to: process.env.SENDER_EMAIL_ADDRESS,
    subject: `Message from ${name}: ${email}`,
    text: message,
    html: `<div><p>${message}</p></div>`
  }

  try{
    await mail.send(mailData).then(() => {}, error => {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    });
    res.status(200).send('Message sent successfully.')
  }catch(e){
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}