const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookieParser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 3000);

//자주 쓰는 미들웨어
//app.use로 장착
//morgan, cookie-parser, express-session 설치
//내부에서 알아서 next를 호출해서 당므 미들웨어로 넘어감
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json);
app.use(express.urlencoded({ extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized :false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie'
}));

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});