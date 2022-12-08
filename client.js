const net = require('net')

const config = {port:3000, host:'127.0.0.1'}
const socket = net.connect(config)

socket.on('connect', ()=>{
    console.log("connected to server!")

    socket.write("hello!")
})

socket.on("data",(message)=>{
    console.log(`Received : ${message}`)

    socket.end()
})

// 브라우저가 클라이언트가 되면 더이상 이 파일은 쓰지 않음