
/*javascript 호출 스택2*/

function run() {
    console.log('3초 후 실행')
}
console.log('시작');
setTimeout(run, 3000);
// -> 비동기
console.log('끝');

// 실행 순서는?
// 시작 -> 끝 -> 3초 후 실행
// 백그라운드보다 호출스택이 먼저 실행되므로 3초 후 실행보다 끝이 먼저 실행
