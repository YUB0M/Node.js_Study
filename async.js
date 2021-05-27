const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('1번', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('2번', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('3번', data.toString());
});

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('4번', data.toString());
})

// 비동기함수이므로 동시에 실행되며 매번 순서가 다름  
// 1번 저를 읽어주세요.
// 3번 저를 읽어주세요.
// 4번 저를 읽어주세요.
// 2번 저를 읽어주세요.

