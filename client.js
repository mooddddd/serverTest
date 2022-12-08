const net = require('net')

const config = {port:3000, host:'127.0.0.1'}
const socket = net.connect(config)

socket.on('connect', ()=>{
    console.log("connected to server!")

    const message1 = {
        content:'aaa',
        reply:false
    }

    const message2 = {
        content:'bbb',
        reply:true
    }

    socket.write(JSON.stringify(message1)) // 스트링으로 만들어주는 메서드
    socket.write(JSON.stringify(message2)) // 스트링으로 넘겨주면 서버에서 다시 객체화 시켜서 처리해줘야 함

    socket.end()
})

socket.on("data",(message)=>{
    console.log(`Received : ${message}`)
}) // 클라이언트 입장에서 서버가 보내는 데이터를 받아 나타내주는 코드!

// 브라우저가 클라이언트가 되면 더이상 이 파일은 쓰지 않음