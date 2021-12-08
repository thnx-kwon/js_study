const path = require('path');
console.log(__filename);    //__filename은 path를 require하지 않아도 global에 정의되어있는듯.

//path.join(__dirname, '..', '/var.js');   // '..'는 이전 폴더를 의미함.
//path.resolve(__dirname, '..', '/var.js');   // '..'는 이전 폴더를 의미함.
// resolve는 절대경로가 있으면 진짜로 절대경로로 수행함. join은 절대경로 무시하고 상대경로로 함.

console.log('path.sep:', path.sep);    // 구분자
console.log('path.delimiter:', path.delimiter); // ; 환경변수 구분시 사용하는 문자

console.log('path.dirname:', path.dirname(__filename)); // C:\User\kwon\Study\nodejs_study
console.log('path.extname:', path.extname(__filename)); // .js
console.log('path.basename:', path.basename(__filename));   // path.js
console.log('path.basename - extname:', path.basename(__filename, path.extname(__filename)));   // path

console.log('path.parse:', path.parse(__filename));  // root, dir, base, ext, name을 담은 객체 출력
console.log('path.format:', path.format({
    root: 'C:\\',
    dir: 'C:\\Users\\kwon\\Study\\nodejs_study',
    base: 'path.js',
    ext: '.js',
    name: 'path',
}));    // C:\Users\kwon\Study\nodejs_study\path.js
console.log('path.normalize:', path.normalize('C:\\Users\\kwon\\Study\\nodejs_study\/path.js'));    // C:\Users\kwon\Study\nodejs_study\path.js


