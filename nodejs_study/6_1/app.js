const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req, rest, next) => {
  console.log('모든 요청에 실행하고 싶어요');
  next();
});

app.get('/', (req, res) => {
  // res.send('Hello, Express');
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
