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