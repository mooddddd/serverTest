const express = require('express')
const path = require('path')
const app = express()

// console.log(__dirname) ///mnt/c/Users/justJ/documents/blockchain/05nodeJS/221209_2
// // 근데 나는 /views를 추가하고싶어!!!! 거기에 /index.html 까지...!!
// console.log(path.join(__dirname, 'views', 'index.html'))
// ///mnt/c/Users/justJ/documents/blockchain/05nodeJS/221209_2/views/index.html

app.get('/', (req, res) => {
    const body = path.join(__dirname, 'views', 'index.html') //body는 이 경로에 있는 index.html 파일로 하겠다!
    console.log(body)
    res.sendFile(body) // body라고 선언된 경로에 있는 파일을 보낼 거야~
}) // 앞으로 클라이언트가 여러 경로로 뻗어나갈 수 있게 얘랑 똑같은 형식으로 주소를 잘 적어서 추가해줌

// GET /
// GET /list
// GET /write
// POST /write

app.get('/list', (req, res) => {
    const body = path.join(__dirname, 'views', 'list.html')
    console.log(body)
    res.sendFile(body)
})
app.get('/write', (req, res) => {
    const body = path.join(__dirname, 'views', 'write.html')
    console.log(body)
    res.sendFile(body)
})
app.post('/write', (req, res) => {
    const body = path.join(__dirname, 'views', 'write.html')
    console.log(body)
    res.sendFile(body)
})



app.listen(3000, ()=>{
    console.log(`server start`)
})