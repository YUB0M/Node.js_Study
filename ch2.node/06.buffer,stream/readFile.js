//const fs = require('fs');
const fs = require('fs').promises;

// fs.readFile('./readme.txt', (err, data)=> {
//     if(err) {
//         throw err;
//     }
//     console.log(data);
//     console.log(data.toString());
// });
fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });


// /<Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e>
// 저를 읽어주세요.
