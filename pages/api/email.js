
export default async function email(req, res) {
  const nodemailer = require('nodemailer')
  const { google } = require('googleapis');
  const { OAuth2 } = google.auth;
  const OAUTH_PLAYGROUND ="https://developers.google.com/oauthplayground";
  const {
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS, //gmail account used to set the project up in google cloud console"
  } = process.env;

  const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET,
    OAUTH_PLAYGROUND
  );
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });
  //accessToken will retrieve a new access token when it expires
  const accessToken = oauth2Client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });

  const {name, email, message} = req.body;
  const mailData = {
    from : SENDER_EMAIL_ADDRESS,
    to: SENDER_EMAIL_ADDRESS,
    subject: `Message from ${name}: ${email}`,
    text: message,
    html: `<div><p>${message}</p></div>`
  }
  smtpTransport.sendMail(mailData, function (err, info) {
    if(err){
      console.log(err);
    }else{
      console.log("sended");
      smtpTransport.close();
    }
  })
  res.status(200).json({});
}