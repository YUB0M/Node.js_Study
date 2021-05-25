const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value',
        },
    },
};
console.time('전체 시간'); //시간 로깅
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(String, number, boolean); //평범한 로그
console.error('에러 메시지는 console.error에 담아주세요'); //에러 로깅

console.table([{name:'봄',birth:1994},{name:'유',birth:1994}]);

console.dir(obj,{colors:false, depth:2}); //객체 로깅
console.dir(obj,{colors:true,depth:1});

console.time('시간 측정');
for(let i=0; i<10000; i++ ){}
    console.timeEnd('시간 측정'); //시간로깅

function b(){
    console.trace('에러 위치 추적');//호출스택 로깅
}
function a(){
    b();
}
a();

console.timeEnd('전체 시간');