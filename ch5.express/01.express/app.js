const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express');
const cookieParser = require("cookie-parser");

const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(__dirname, 'public'));
app.use(morgan('dev'));//개발할때는 dev 배포할때는 combined
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized:false,
    secret: 'bompassword',
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) =>{
    //'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    res.sendFile(path.join(__dirname, 'index.html'));
    // 한 미들웨어에 res.send중복&json사용 시 오류
    // res.send('안녕하세요'); ->
    // res.json({ hello :'bomyu' });
});

app.post('/', (req, res) =>{
    res.send('hello express');
});

app.get('/category/Javascript', (req, res) => {
   res.send(`hello Javasciript`);
});

app.get('/category/:name', (req, res) => {
    res.send(`hello wildcard`);
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    res.status(200).send('404지롱');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(200).send('에러가 났어욤');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});