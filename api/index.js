const express = require('express')
const app = express()
const logger = require('morgan'); // express 로그
const bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/',(req,res)=>{
    res.json(1)
});
//faq 게시판 데이터

// app.use('/faq',require('./router/faq'));//faq 게시판 데이터

module.exports = {
  path: '/api',
  handler: app
}