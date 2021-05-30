// buffer와 stream
// buffer : 일정한 크기로 모아두는 데이터
// stream : 데이터의 흐름, 일정한 크기로 나눠서 여러번에 걸쳐서 처리
// node에서는 stream 방식을 사용하는 것을 권장 


const buffer = Buffer.from('버퍼 변경');
console.log('from() : ', buffer);
console.log('length : ', buffer.length);
console.log('toString() : ', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat() : ', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc() : ', buffer3);