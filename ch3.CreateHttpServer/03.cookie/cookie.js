const http = require('http');

http.createServer((req, res) => {
                        // 요청에 헤더에 들어있는 쿠키
   console.log(req.url, req.headers.cookie);
   res.writeHead(200, { 'Set-Cookie' :'mycookie=test' });
   res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다.');
    });