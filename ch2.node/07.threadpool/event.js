const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
    console.log('이벤트 3');
}); // 한번만 실행

myEvent.emit('event1'); //이벤트 호출
myEvent.emit('event2'); //이벤트 호출

myEvent.emit('event3'); //이벤트 호출
myEvent.emit('event3'); //실행 X

myEvent.on('event4', () => {
    console.log('이벤트 4')
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행x

const listner = () => {
    console.log('이벤트 5');
};
myEvent.on('event5', listner);
myEvent.removeListener('event5',listner);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));
// 콜백함수가 몇개 등록되어 있는지 -> 2개 (이벤트2가 2개)
// on의 콜백부분이 2개