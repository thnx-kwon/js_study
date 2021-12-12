const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.once('event3', () => {
    console.log('이벤트 3');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3'); // 실행 안됨.

myEvent.on('event4',() =>{
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안됨.

const listner = () => {
    console.log('이벤트 5');
};
myEvent.on('event5', listner);
myEvent.emit('event5');

myEvent.removeListener('event5', listner);
myEvent.emit('event5'); // 실행 안됨.