const express = require('express');
const path = require('path');
const formidable = require('formidable');
const app = express();
const fs = require('fs');
require('dotenv').config();
const PORT = process.env.SERVER_PORT || 9000;
const CLIENT_PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL || 'http';
const HOSTNAME = process.env.HOST || 'localhost';
const UPLOAD_DIR = path.join(__dirname, 'uploads/');
const CORS =
  process.env.NODE_ENV === 'production'
    ? `${PROTOCOL}://${HOSTNAME}`
    : `${PROTOCOL}://${HOSTNAME}:${CLIENT_PORT}`;

if (!fs.existsSync(UPLOAD_DIR)) {
  console.warn('Creating uploads folder...');
  fs.mkdirSync(UPLOAD_DIR);
}
console.info(`Uploads will be saved in ${UPLOAD_DIR}`);
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
app.use(express.static(path.join(__dirname, 'build')));

// SEND GRID START
const helper = require('sendgrid').mail;
const fromEmail = new helper.Email('isak.engdahl@gmail.com');
const toEmail = new helper.Email('isak.engdahl@gmail.com');
const subject = 'Sending with SendGrid is Fun';
const content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
const mail = new helper.Mail(fromEmail, subject, toEmail, content);

const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
});
// SEND GRID END

app.post('/uploads', (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req).on('field', (field, value) => {
    console.log(field, value);
  });

  form.on('fileBegin', (name, file) => {
    file.path = `${UPLOAD_DIR}${file.name}`;
  });
  form.on('file', (name, file) => {
    console.log('Uploaded ' + file.name);
  });
  res.header('Access-Control-Allow-Origin', CORS);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.status(200).json({ success: true, status: 'Form successfully submitted' });
  sg.API(request, function(error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, _ => console.log(`Server listening on PORT ${PORT}...`));
