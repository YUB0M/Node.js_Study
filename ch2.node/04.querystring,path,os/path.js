
const path = require('ch1-ch4/3.5/path');

// 운영체제 별 경로처리
// c:\users\bomyu
// c:\\users\\bomyu
// users/bomyu/

path.join(__dirname, '..', 'var.js');
console.log(path.join(__dirname, '..', 'var.js'));
// /Users/bomyu/WebstormProjects/var.js
path.resolve(__dirname, '..', '/var.js');
console.log(path.resolve(__dirname, '..', '/var.js'));
// /var.js