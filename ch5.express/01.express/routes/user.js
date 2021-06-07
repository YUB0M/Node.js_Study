const express = require('express');

const router = express.Router();

//GET/user 라우터
router.get('/', (req, res) => {
    res.send('Hello, User');
});

//id를 넣으면 동적으로 변하는 부분을 req.params.id로 받을 수 있음
//콘솔에 {id:000}{limit:'0',skip:'00}
router.get('/user/:id', function (req, res) {
    console.log(req.params, req.query);
});

//일반 라우터보다 뒤에 위치해야 하는 것
router.get('/user/:id', function (req, res) {
    console.log('실행 됩니다');
});
router.get('/user/like', function (req, res) {
    console.log('전혀 실행되지 않습니다.');
});


module.exports = router;
