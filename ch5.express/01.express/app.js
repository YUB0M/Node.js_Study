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
    //세션관리용 미들웨어(express-session)
    //resave:요청이 왔을 때 세션에 수정사항이 생기지 않아도 다시 저장할지 여부
    //saveUninitialized:세션에 저장할 내역이 없더라도 세션을 저장할지
    //req.session.save로 수동저장도 가하지만 할일 거의 없음
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

// //공통미들
// app.use((req, res, next) => {
//     console.log('1 모든 요청에 실행하고 싶어요');
//     next();
// }, (req, res, next) => {
//     try {
//         console.log(asdfsdfsdfd)
//     } catch (error) {
//         next(error); //에러처리 미들웨어로 넘어감
//     }
// })

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

//에러 미들(매개변수 err,req,res,next 모두 다 작성)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(200).send('에러가 났어욤');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});