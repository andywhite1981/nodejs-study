import EventEmitter from 'events';

const myEmitter = new EventEmitter();

const timeoutListenerFn = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds!`);
};

myEmitter.on('timeout', timeoutListenerFn);

setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);
setTimeout(() => myEmitter.emit('timeout', 3), 3000);

myEmitter.once('SingleEvent', () => {
    console.log('Single event occurred');
});

// Listener function will be called only once!
setTimeout(() => myEmitter.emit('SingleEvent'), 500);
setTimeout(() => myEmitter.emit('SingleEvent'), 1500);

// Remove listener fom the 'timeout' event
setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3500);
setTimeout(() => myEmitter.emit('timeout', 4), 4000);
