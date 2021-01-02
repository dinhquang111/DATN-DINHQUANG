const express = require('express');
require('dotenv').config();
global.Env = process.env;
const app = express();
const logger = require('morgan');
const multer = require('multer');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cors = require('cors')
app.use(cors());

const options = {
    native_parser:true,
    poolSize : 5,
    useNewUrlParser: true,
    useUnifiedTopology: true ,
}
const MONGODB_URL='mongodb+srv://admin:1234@zed.1pcun.mongodb.net/pets?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL,options).then(
  ()=>{
    console.log("connect DB Done")
  },
  err =>{
    console.log("connect failed ${err}")
  }
)

logger.token('forwarded-addr', get_client_ip);

app.use(
  logger(
    `[APP_NAME=SHOP] :forwarded-addr - :remote-addr [:date] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms`
  )
);

app.use((req, res, next) => {
  console.log(`request at ${new Date()}`);
  next();
});
app.use(express.static('upload'))
app.use(express.static('upload2'))
app.use(express.static('blogupload'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const http = require('http').Server(app);

function get_client_ip(req) {
  try {
    let ip =
      (req.headers['X-Forwarded-For'] ||
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress ||
        '')
        .split(',')[0] || req.client.remoteAddress;

    return ip.replace('::ffff:', '');
  } catch (error) {
    return '127.0.0.1';
  }
}

http.listen(Env.PORT, () => {
  console.log(`Server run at port: ${Env.PORT}`);
});

module.exports = app;