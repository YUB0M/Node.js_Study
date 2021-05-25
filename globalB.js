//global과 콘솔, 타이머
const A = require('./globalA');

global.message = '안녕하세요';
console.log(A());

// 가능한 global에 저장하지 말고 module에 저장할 것 