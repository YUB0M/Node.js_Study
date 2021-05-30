const fs = require('fs').promises;

process.on('uncaughException', (err) =>{
    console.error('예기치 못한 애러', err );
});

setInterval(() => {
    throw new Error('서버 고장!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
},2000);

// 프로세스 종료하기
// 윈도
// netstat --ano : findstr 포트
// taskkill /pid 프로세스아이디 /f

// 맥
// lsof -i tcp:포트
// kill -9 프로세스아이디

// process.pid (7805)