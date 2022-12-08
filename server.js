const net = require('net')
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const body = Buffer.from(`<h1>hello world</h1>`)
const res = `HTTP/1.1 200 ok
Connection: keep-alive
Keep-Alive: timeout=5
Content-type: text/html
Content-length: ${body.length}

${body.toString()}
`

const server = net.createServer((client)=>{
    client.setEncoding("utf-8")
    client.on("data", (data)=>{
        console.log(data)
    })

    client.write(res)

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