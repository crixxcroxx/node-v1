import logger from './logger.js'
import events from 'events'


class MyEmitter extends events { }

///////////
const myEmitter = new MyEmitter()

myEmitter.on('log', msg => logger(msg))

setTimeout(() => {
    myEmitter.emit('log', 'Log is emitted')
}, 2000)