const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

dotenv.config();
const app01 = express();

app01.set('port', process.env.PORT || 3000);

//미들웨어 연결
app01.use(morgan('dev'));
app01.use(cookieParser(process.env.COOKIE_SECRET));
app01.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
    },
}));
app01.use('/', express.static(__dirname, 'public'));
app01.use(express.json());
app01.use(express.urlencoded({ extended: true }));

app01.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app01.post('/', (req, res) => {
    res.send('hello express!');
});

app01.get('/category/Javascript', (req, res) => {
    res.send('hello Javascript');
});

app01.get('/category/:name', (req, res) => {
    res.send('hello wildcard');
});

app01.get('/about', (req, res) => {
    res.send('hello express');
});

app01.use((req, res, next) => {
    res.status(404).send('404 에러입니다 ~~!! ');
});

app01.use((err, req, res, next) => {
    console.error(err);
    res.status(200).send('에러났어용 이유는 비밀');
})

app01.listen(app01.get('port'), () => {
    console.log('익스프레스 서버 실행');
});