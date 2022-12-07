const net = require('net')
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer(()=>{
    여기 안에 들어가는 애는, 클라이언트가 뭔가 실행됐을 때 발동됨!!
})

server.listen(PORT, HOST, ()=>{
    console.log("대기모드")
})