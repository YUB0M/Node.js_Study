const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page3&limig=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));

//
// querystring.parse(쿼리) : url의 query 부분을 자바스크립트 객체로 분해
// querystring.parse(): [Object: null prototype] {
//     page3: '',
//         limig: '10',
//         category: [ 'nodejs', 'javascript' ]
// }

// querystring.stringify(객체) : 분해된 query객체를 문자열로 다시 조립
// querystring.stringify(): page3=&limig=10&category=nodejs&category=javascript
