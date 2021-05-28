const fs = require('fs').promises;

fs.readdir('./folder')
.then((dir)=> {
    console.log('폴더 내용 확인', dir);
    return fs.unlink('./folder/newFile.js');
    // unlink : 파일 삭제 -> 파일없으면 에러 생기므로 파일확인 필수 
})
.then(() => {
    console.log('파일 삭제 성공');
    return fs.rmdir('./folder');
    // rmdir : 폴더 삭제
})
.then(() => {
    console.log('폴더 삭제 성공');
})
.catch((err) => {
    console.error(err);
});