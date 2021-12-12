const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

const min = 2;
let primes = [];


function findPrimes(start, end){
    for(let i = start; i < end; i++){
        let isPrime = true;
        let jend = Math.sqrt(i);
        for(let j = min; j <= jend; j++) {
            if(i !== j && i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) primes.push(i);
    }
}

if(isMainThread) {
    const max = 10_000_000;
    const threadCount = 4;
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount);
    let start = min;
    console.time('prime');
    for(let i = 0; i < threadCount - 1; i++){
        const wStart = start;
        threads.add(new Worker(__filename, {workerData:{start: wStart, end: wStart + range}}));
        start += range;
    }
    threads.add(new Worker(__filename,{workerData:{start, end : max}}));
    for(let worker of threads){
        worker.on('exit', () => {
            threads.delete(worker);
            if(threads.size === 0){
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        })
    }
} else{
    findPrimes(workerData.start, workerData.end);
    parentPort.postMessage(primes);
}