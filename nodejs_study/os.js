const os = require('os');

console.log('CPU 개수 : ' + os.cpus().length);    // CPU 개수
console.log(os.cpus());    // CPU 정보
console.log(os.arch());    // x64 (architext인듯.)
console.log(os.platform());    // win32
console.log(os.type());    // Windows_NT
console.log('초 : ' + os.uptime());    // 운영체제가 부팅 이후 흐른 시간(초)
console.log('분 : ' + os.uptime()/60);    // 운영체제가 부팅 이후 흐른 시간(분)
console.log('시간 : ' + os.uptime()/60/60);    // 운영체제가 부팅 이후 흐른 시간(시간)
console.log('일 : ' + os.uptime()/60/60/24);    // 운영체제가 부팅 이후 흐른 시간(일)
console.log(os.hostname()); // 컴퓨터의 이름 (LAPTOP-R6NVDL03)
console.log(os.release());  // 운영체제 버전 : 10.0.19043
console.log(os.homedir());  // 홈 디렉터리 경로 C:\Users\kwon
console.log(os.tmpdir());   // 임시 파일 저장 경로 C:\Users\kwon\AppData\Local\Temp (이건모지?)
console.log(os.freemem());  // 사용 가능한 메모리를 보여줌 (1348751360)
console.log(os.totalmem()); // 전체 메모리를 보여줌. (8499183616)
