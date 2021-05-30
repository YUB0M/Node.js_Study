
if(true) {
    var x = 3;
}
console.log(x);
// var -> 함수 스코프

if(true) {
    const y = 3;
console.log(y);
}
//console.log(y); -> 에러
// const -> 블록 스코프

///////////////////////////////////////

const b = {name:'yubom'};
b.name = 'bombom';
console.log(b);

/*
* const a = 3;
* const는 한번만 대입할 수 있다.

    1)
    const a = 3;
    a = '5'; -> 에러

    2)
    const b = {name:'yubom'};
    b.name = 'bombom'; -> 객체를 넣었을 때 가능
*
*
*/

///////////////////////////////////////

let c = 5;
c = 3;
console.log(c);

/*
* 값을 바꾸고 싶을 때 let사용
*/