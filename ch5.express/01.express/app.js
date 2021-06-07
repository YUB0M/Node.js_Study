const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 3000);

//미들웨어 연결
app.use(morgan('dev'));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
    },
}));
app.use('/', express.static(__dirname, 'public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express!');
});

app.get('/category/Javascript', (req, res) => {
    res.send('hello Javascript');
});

app.get('/category/:name', (req, res) => {
    res.send('hello wildcard');
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    res.status(404).send('404 에러입니다 ~~!! ');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(200).send('에러났어용 이유는 비밀');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});