
// 단방향 암호화(Crypto)
// >> 암호화는 가능하지만 복호화는 불가능
// 암호화 : 평문을 암호로 만듦
// 복호화 : 암호를 평문으로 해독

const crypto = require('crypto');

// upate(문자열) 변환할 문자열 넣어줌
// diget(인코딩 ) 인코딩할 알고리즘 넣기
console.log('hasn64 : ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex : ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64 : ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

// 비밀 번호라는 단어가 아래 글자로 바뀌어 저장됨
// hasn64 :  dvfV6nyLRRt3NxKSlTHOkkEGgqW2HRtfu19Ou/psUXvwlebbXCboxIPmDYOFRIpqav2eUTBFuHaZri5x+usy1g==
// hex :  76f7d5ea7c8b451b773712929531ce92410682a5b61d1b5fbb5f4ebbfa6c517bf095e6db5c26e8c483e60d8385448a6a6afd9e513045b87699ae2e71faeb32d6
// base64 :  cx49cjC8ctKtMzwJGBY853itZeb6qxzXGvuUJkbWTGn5VXAFbAwXGEOxU2Qksoj+aM2GWPhc1O7mmkyohXMsQw==

