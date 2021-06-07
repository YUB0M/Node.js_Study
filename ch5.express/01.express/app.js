const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
//nonjucks 템플릿
const nunjucks = require('nunjucks');

dotenv.config();
//라우터 분리
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

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

//라우팅 분리하기 sa
app.use('/', indexRouter);
app.use('/user', userRouter);

//404미들웨어 만들기
app.use((req, res, next) => {
    //res.status(404).send('Not Found');
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    // console.error(err);
    // res.status(500).send(err.message);
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
//process.env.NODE_ENV: 개발환경인지 배포환경인지 구분하는 속성

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
