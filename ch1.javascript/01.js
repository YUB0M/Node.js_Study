
/*javascript 호출 스택*/
function first() {
    second();
    console.log('첫번째');
}
function second() {
    third();
    console.log('두번째');
}
function third() {
    console.log('세번째');
}
first();

// 실행 순서는?
// 세번째 -> 두번째  -> 첫번째
