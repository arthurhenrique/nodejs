const EventEmitter = require('events')

class Emitter extends EventEmitter {}

const emitter = new Emitter()
const nameEvent = 'user:click'

emitter.on(nameEvent, function (click) {
    console.log('user clicked', click)
})

// emitter.emit(nameEvent, 'role bar')
// emitter.emit(nameEvent, 'ok')

// let count = 0
// setInterval(function () {
//     emitter.emit(nameEvent, 'ok' + count++)
// }, 1000)


const stdin = process.openStdin()

stdin.addListener('data', function (value) {
    console.log(`typed: ${value.toString().trim()}`)
})