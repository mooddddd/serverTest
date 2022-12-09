const net = require('net')

const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{ //client라는 빵꾸는 client 파일에서 socket이 채워줌
    client.setEncoding("utf-8")

    client.on('data', (chunk)=>{ // chunk라는 빵꾸는 client 파일에서 socket.write 내용들이 채워줌
        console.log(chunk)

        if(chunk==="index.html 파일 줘"){
            client.write("<h1>index.html</h1>")
        } else if(chunk==="user.html 파일 줘") {
            client.write("<h2>user.html</h2>")
        }
    })
})

server.on('connection', ()=>{
    console.log("클라이언트 접속완료")
})

server.listen(PORT, HOST, ()=>{
    console.log(`server start!`)
})