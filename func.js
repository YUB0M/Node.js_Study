// const value = require('./var');
// console.log(value);
//var.js 의 .js는 생략 가능

//------------------
// 구조분해 활동
const{ odd, even } = require('./var');

function checkOddOrEven(number) {
    if (number % 2 ){
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;