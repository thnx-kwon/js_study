const timeout = setTimeout(() => {
    console.log('timeout 0 ')
}, 0); 
const immediate = setImmediate( () => {
    console.log('즉시 실행');
});
process.nextTick(() =>{
    console.log('nextTick1');
})
Promise.resolve().then(() => {
    console.log('promise');
});
process.nextTick(() =>{
    console.log('nextTick2');
})