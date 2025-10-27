// global.console.log('Hello sachin')

// global.setTimeout(() => {
//   console.log('kohli')
// }, 2000)

// var personalInfo = require('./personalInfo.js')
// personalInfo('sachin')

//     var a = 'dhoni'
//     console.log(a)
    
    // function b() {
    //   console.log('test')
// }
    
// console.log(module)

// console.log(module.exports)

// //OS MODULE

// var os = require('os')

// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()
// var architecture = os.arch()
// var hostName = os.hostname()

// console.log(totalMemory)
// console.log(freeMemory)
// console.log(architecture)
// console.log(hostName)

//FS MODULE

var fs = require('fs')

// fs.readFile('index.js', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// fs.appendFile('index.js', 'Hello how are', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('new data appended')
//     }
// })

// fs.mkdir('myfolder', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('new folder is created')
//     }
// })

// fs.unlink('./hello.js', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('file deleted')
//     }
// })


//events Module

// var EventEmitter = require('events')

// var myEmmiter = new EventEmitter()

// myEmmiter.on('order placed', (orderId) => {
//     console.log(`Order placed with order id ${orderId}`)
// })

// myEmmiter.emit('order placed', '1234567')

// myEmmiter.on('verify email', (email) => {
//     console.log(`Verify email ${email}`)
// })

// myEmmiter.emit('verify email', 'reyansoft@gmail.com')

var http = require('http')

var server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello server')
        res.end()
    }
    if (req.url === '/products') {
        res.write(JSON.stringify([{name: 'apple', price: 200}, {name: 'banana', price: 60}]))
        res.end()
    }
})

server.listen(5000, () => {
    console.log('server started in port 5000')
})

