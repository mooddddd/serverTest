const net = require('net')

const config = {port:3000, host: "127.0.0.1"}
const socket = net.connect(config)

socket.on('connect', ()=>{
    console.log("서버 연결 완료!")
    
    socket.write("index.html 파일 줘")
})

socket.on('data', (chunk)=>{
    console.log(chunk.toString())

    socket.write("user.html 파일 줘")
})