const net = require('net')
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    client.on("data", (data)=>{
        console.log(data)
    })

    client.write("나 데이터 받았어!")

    client.on("close", ()=>{
        console.log("잘가!")
    })
})

server.listen(PORT, HOST, ()=>{
    console.log(`Server Listening Port : ${PORT}`)

    server.on("connection", ()=>{
        console.log("client 접속 완료")
    })
})