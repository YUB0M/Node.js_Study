
const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOrEven(str) {
    if (str.length % 2 ) {
        return odd;
    }else {
        return even;
    }
}
console.log(checkNumber(10));
console.log(checkStringOrEven('hello'));