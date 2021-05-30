const fs = require('fs').promises;
const constants = require('fs').constants;

// constants.F_OK | constants.W_OK | constants.R_OK
// 폴더가 있는지 없는지 판단
// fs.access or fs.stat or fs.existsSync

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
.then(() => {
    return Promise.reject('이미 폴더 있음');
})
.catch((err) => {
    if(err.code === 'ENOENT') {
        console.log('폴더 없음');
        return fs.mkdir('./folder');
    }
    return Promise.reject(err);
})
.then(() => {
    console.log('폴더 만들기 성공');
    return fs.open('./folder/file.js', 'w');
})
.then((fd) => {
    console.log('빈 파일 만들기 성공', fd);
    fs.rename('./folder/file.js', './folder/newfile.js');
})