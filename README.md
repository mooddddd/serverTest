221208 1교시

# TCP

L4 - 식별자 port
L3 - ip

프로그램vs프로세스 차이
프로그램 : 코드 그 자체
프로세스 : 코드를 실행시킨 것

프로세스vs스레드 차이
프로세스 : 데이터 공유 불가
스레드 : 데이터 공유 가능

- 프로세스끼리 데이터를 공유하기 위해서는 통신이 반드시 있어야 함

osi 7계층 : 컴퓨터의 네트워크를 계층별로 설명한 것
여기서 우리는 인터넷을 사용할 것이고, tcp 통신을 할 것이라는 게 중요함
어플리케이션과 tcp를 이어주기 위해서는 소켓이라는 것이 필요!

현재 목적 : 프로세스를 2개 만들고, 그 프로세스끼리 통신하게 하는 것
첫번째 프로세스 : server.js
두번째 프로세스 : client.js

tcp <- 커널 영역
nodeJS에서 커널영역인 TCP 통신을 할 수 있도록 도와주는 내장모듈이 `net`
그래서 어제 net을 이용해서 서버를 만들었음

tcp의 특징 : 연결이 있음! 즉 로그인과 로그아웃 개념 존재
여기서 연결은 물리적인 것이 아닌, 논리적인 것! 그냥 가져다가 냅다 선같은 것을 꽂는 것이 아님
연결하는 방법 -> 3-way Handshaking
-> 연결은 두 가지 개념으로 나눠짐. connection & session 얘네는 둘 다 연결이라고 부르지만 다른 개념
순서대로 연결됨


서버를 먼저 만들어야 함 - > 얘는 항시 클라이언트를 받아들일 수 있또록 열여놔야 함, 즉 대기상태를 만들어야 함!
서버가 열려있어야 클라이언트가 접근할 수 있음!

* 대기상태를 만드는 코드
```js
const net = require('net')

// 포트랑 호스트(인터넷이 되는 컴퓨터)를 선언해줌
const port = precess.env.SERVER_PORT || 3000
const host = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer() // 서버라는 변수에 무언가 객체를 넣는 행위
// 만약 () 안에 콜백함수가 들어간다는 걸 모르겠다 하면
// console.log(server) 를 찍어서 확인해봄!
// 파일이 열렸다가 끝나네? -> 아직 대기상태는 아닌 것!

// listen까지 열어줘야 대기상태로 들어가짐!
// 인자값이 3개인 이유 : 포트(어떤 프로세스에게 접근해야 하는지 알려주는 역할)만 알려주면 정확한 접속이 불가능함! 포트와 아이피(내 컴퓨터 좌표)를 함께 알려줘야 클라이언트가 서버에 정확하게 접근할 수 있음!!
server.listen(port, host, ()=>{
    console.log("서버 열렸어용")
}) // 대기모드를 유지하기 위해서 인자값을 채워줘야 함
```

대기를 시켜놓으면 이제 클라이언트가 접근을 할 수 있음!
그러면 클라이언트를 만들어보자! 얘도 통신이 가능한 환경을 설정해주어야 함! 
그렇기 때문에 client에도 net 모듈을 사용하는 것!

* client.js
```js
const net = require('net')

// 그 다음 클라이언트가 어느 주소로 접속할 지 알아야 함! 그 주소가 포트와 아이피!
// port : 3000, ip : 127.0.0.1

// net.connect() -> 이 코드만 입력하면 연결을 하기 위한 과정(3-way handshaking)이 시작됨! 괄호안에 주소 넣으면 됨
const config = {port:3000, host:"127.0.0.1"}
net.connect(config) // connect를 쓰면 3번 왔다갔다 하는 과정이 끝남! = 즉 연결됨!
```

그러면 연결이 되었다는 걸 어떻게 알 수 있을까? -> 콘솔로그를 찍어보면 되지!
client가 server에게 받은 ack를 다시 되돌려줬을 때 server에서 그 과정이 끝난 걸 확인하는 방법은 아래와 같음!
```js
server.on('connection', ()=>{
    console.log("클라이언트 접속")
})
```

```js
const socket = net.connect(config) 를 담는 이유 : 
```

그럼 그 전에 server가 client로부터 받았던 syn과 새로운 ack를 되돌려주었을 때 client가 받았다!, 즉 클라이언트 입장에서 연결이 되었다는 걸 확인하고 싶으면
```js
socket.on("connect", ()=>{
    console.log("server로부터 온 응답. client는 연결됨")
})
```

그런 다음 클라이언트에서 데이터를 보내고 싶으면
```js
socket.on("connect", ()=>{
    console.log("server로부터 온 응답. client는 연결됨")

    socket.write("aaa")
    socket.write("bbb")
})
```

근데 여기까지는 그냥 just 보낸 것 뿐! server에는 표시되지 않음! 왜냐? 표시해달라는 코드를 안썼거등..!!! 이미 보내져있는 상태기는 함. 

이렇게 클라이언트와 서버가 연결되었을 때 중요한 건 서버가 접속한 클라이언트를 구별할 줄 알아야 함
그래서 const server = net.createServer() 여기에 콜백함수가 들어가는데 인자값을 client로 넣음!

```js
const server = net.createServer((client)=>{
    console.log(client) // 클라이언트에 대한 정보가 여기 담겨져 있음!
})

server.on('connection', ()=>{
    console.log("클라이언트 접속")

})
```

net은 client와 server가 각각 다른 타입인 메서드가 사용되어야 함
client는 net.connect()를 써! 여기에 클라이언트를 위한 객체가 담겨있어~~
server는 net.creatServer() 를 써! 여기에 서버를 위한 객체가 담겨있어~~


* 1교시 코드 정리
client.js
```js
const net = require('net')
const config = {port:3000, host:"127.0.0.1"}
const socket = net.connect(config)

socket.on("connect", ()=>{
    console.log("server로부터 온 응답. client는 연결됨")

    socket.write("aaa")
    socket.write("bbb")
})
```

server.js
```js
const net = require('net')

const port = precess.env.SERVER_PORT || 3000
const host = process.env.SERVER_HOST || "127.0.0.1"

const server = net.createServer((client)=>{
    console.log(client)
})

server.on('connection', ()=>{
    console.log("클라이언트 접속")

})
```

-끝-


<2교시 시작>
client.setEncoding("utf-8")


server에서 client로 데이터 보내보기!
`ccc`라는 데이터를 보내보자.

서버가 클라이언트에게 데이터를 던지는 코드
```js
const server = net.createServer((client)=>{
    // client.setEncoding("utf-8")
    client.on("data", (data)=>{
        console.log(data)
    })

    client.write("ccc") // 여기!!
})
```

client가 server로부터 데이터를 받으면 클라이언트 환경에서 받은 데이터를 출력할 수 있도록 코드를 작성해줌
```js
socket.on("data",(message)=>{
    console.log(`Received : ${message}`)
})
```

클라이언트랑 서버의 포맷은 다를 수 있음
원하는 것이 다르기 때문에.
서버는 클라이언트가 요청한 값을 보고 보내줘야 함!


<3교시 시작>
1에서 100까지 출력하세요
3의 배수일 땐 fizz 출력
5의 배수일 땐 buzz 출력
3의 배수면서 5의 배수일 때는 fizzbuzz를 출력하세요