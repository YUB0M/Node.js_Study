const fs = require('fs').promises;

fs.writeFile('./writeme.txt','글이 입력됩니다.') // 쓰기
    .then(() => {
      return fs.readFile('./writeme.txt'); // 읽기 
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });
