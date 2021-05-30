//파일 감시

const fs = require('fs');

fs.watch('./target.txt',(eventType, filename) => {
    console.log(eventType, filename);
});