const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname,'public')));
app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'somethingPassword',
  cookie:{
    httpOnly: true,
  },
  name: 'connect.sid',
}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use((req, rest, next) => {
  console.log('모든 요청에 실행하고 싶어요');
  next();
});

app.get('/', (req, res) => {
  req.cookies;
  req.signedCookies;
  res.cookie('name', encodeURIComponent('name'), {
    expires: new Date(),
    httpOnly: true,
    path: '/',
  });
  // res.clearCookie('name', encodeURIComponent('name'), {
  //   httpOnly: true,
  //   path: '/',
  // });
  res.sendFile(path.join(__dirname, '/index.html'));

});

app.get('/about', (req, res) => {
  res.send('Hello, Express');
});

app.use((req, res) => {
  res.status(404).send('페이지를 찾지 못했습니다.');
  console.log('페이지를 못찾은 경우');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send('에러났지롱. 근데 안알려주지롱');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
