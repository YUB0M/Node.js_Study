
var won = 1000;
//var result = '이 과자는' + won + '원 입니다.';
// 이 과자는1000원 입니다.

const result = `이 과자는 ${won}원 입니다.`;
// 이 과자는 1000원 입니다.
// 변수를 ${}로 감싸준다.
console.log(result);

function a() {}
a(); // -> 호출방법 1
a``; // -> 호출방법 2

//-------------------------------------//
// ES5 객체 표현 방법
var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS:function(){
        console.log('JS');
    },
    sayNode:sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic

// 간결한 문법
const newObject = {
    sayJS(){
        console.log('JS');
        //function 선언을 하지 않아 간결해짐
    },
    sayNode,
    //같으면 뒤에것을 생략해도 됨
    [es + 6]:'Fantastic',
    //객체 안에 선언할 수 있게 됨
};
newObject.sayNode(); //Node
newObject.sayJS(); //JS
console.log(newObject.ES6); //Fantastic