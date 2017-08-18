import url from 'url';
require('nightmare-upload')(Nightmare);

const BASE_URL = url.format({
  protocol: process.env.PROTOCOL || 'http',
  hostname: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
});

const location = url.resolve(BASE_URL, path);
const config = {
  show: false,
  gotoTimeout: 4000,
};

const nightmare = Nightmare(config);
return nightmare.goto(location);
