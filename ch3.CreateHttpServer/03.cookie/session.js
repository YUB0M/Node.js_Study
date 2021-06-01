const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('quierystring');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map( v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const session = {}; //데이터 저장용

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() +10);
        const uniqueInt = Date.now();
        session[uniqueInt] = {
            name,
            expires,
        };
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie' :`session=${uniqueInt}; Expires=${expires.toGMTString()}; httpOnly; Path=/`,
        });
        //Expires=${expires.toGMTString()}; -> 쿠키 만료기간
        //httponly -> 보안을 위해
        res.end();
    //세션쿠키O 만료기간이 지나지 않았을 경우
    }else if(cookies.session && session[cookie.session].expires > newDate()){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8' });res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(err.message);
        }
    }
})
    .listen(8085, () => {
        console.log('8085번 포트에서 서버 대기 중입니다!');
    });