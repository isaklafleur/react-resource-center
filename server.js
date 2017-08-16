const express = require('express');
const path = require('path');
const formidable = require('formidable');
const app = express();
const fs = require('fs');

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
app.use(express.static(path.join(__dirname, 'build')));

app.post('uploads', (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req);

  form.on('fileBegin', (name, file) => {
    file.path = __dirname + '/uploads/' + file.name;
  });
  form.on('file', (name, file) => {
    console.log('Uploaded ' + file.name);
  });
  // res.sendFile(__dirname + '/index.html');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, () => console.log('Now serving on http://localhost:9000'));
