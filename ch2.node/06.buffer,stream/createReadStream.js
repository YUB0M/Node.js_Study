const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});

const data = [];
readStream.on('data', (chunk) => {
    data.push(chunk),
        console.log('data',chunk, chunk.length);
}); // 순서대로 보내줌
readStream.on('end', () => {
    console.log('end : ', Buffer.concat(data).toString());
});
readStream.on('error', (err) => {
    console.log('error : ',err);
}); // 비동기는 반드시 에러처리


