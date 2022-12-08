const net = require('net')
const PORT = process.env.SERVER_PORT || 3000
const HOST = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    client.setEncoding("utf-8") // buffer 타입인 데이터가 오기 때문에 우리가 읽을 수 있는 글자로 변환할 수 있도록 설정해줌
   
    client.on("data", (chunk)=>{ // client한테 데이터가 올 때 뒤에 있는 함수를 실행시킨다!
        console.log(chunk) // client로부터 온 데이터가 찍히도록 콘솔로그 이용함
        //얘는 스트링 형태

        const data = JSON.parse(chunk) //얘는 객체형태

        console.log(data.content) // 그러면 객체형태로 나타나게 되겠지?

        if(data.reply){ // 그 객체중에서 reply라는 애가 true값일 때 클라이언트한테 ccc를 찍는다~
            client.write("ccc")   
        }
    })
})

server.on("connection", ()=>{
    console.log("client 접속 완료")
})

server.listen(PORT, HOST, ()=>{
    console.log(`Server Listening Port : ${PORT}`)
})