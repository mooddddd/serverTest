const net = require('net')
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    client.on("data", (data)=>{ // client한테 데이터가 올 때 뒤에 있는 함수를 실행시킨다!
        console.log(data) // client로부터 온 데이터가 찍히도록 콘솔로그 이용함
    })
})

server.on("connection", ()=>{
    console.log("client 접속 완료")
})

server.listen(PORT, HOST, ()=>{
    console.log(`Server Listening Port : ${PORT}`)
})