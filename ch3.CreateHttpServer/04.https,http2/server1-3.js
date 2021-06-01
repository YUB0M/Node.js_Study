const https = require('https');
const fs = require('fs');

https.createServer({
    //공식인증기관(무료:Let's Encrypts)에서 cert,key,ca를 받아와야함
    //sync를 사용해도 되는 경우
    // - 딱 한번만 사용하거나 서버의 경우 서버를 시작하기 전 초기화 할 때
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
}, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
    // 서버 연결
    // https 기본포트 443
    .listen(443, () => {
        console.log('443번 포트에서 서버 대기중입니다.');
    });
