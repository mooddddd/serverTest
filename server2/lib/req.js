// const requestMessage = `reply:true
// content-type:string
// content-length:10

// Hello world~
// `

// 입력 --> requestMessage

// const createRequestMessage = (reply, type, body)=>{
//     const length = Buffer.from(body).length
//     return `reply:${reply}
//     content-type:string
//     content-length:10
    
//     Hello world~
//     `
// }

// createRequestMessge(true, "string", "hello world!")

// const obj = {
//     reply:true,
//     "content-type":"string",
//     body:"hello world!",
// }

// const arr = ["reply", "content-type", "body"]

// obj[arr[0]] // true
// obj[arr[1]] // string
// obj[arr[2]] // hello world!

// console.log(obj[arr[0]])
// console.log(obj[arr[1]])
// console.log(obj[arr[2]])

const arr = Object.keys(obj).filter((value)=>{return value!=='body'}) // obj 안에 있는 키값만 싹싹 담아줌!
// console.log(arr) // 값 확인~! [ 'reply', 'content-type', 'body' ]
arr.push("content-length") // body의 길이를 구해서 arr 맨 뒤에 push해줌
// console.log(arr) // [ 'reply', 'content-type', 'body', 'content-length' ]


//arr.filter() : 필터는 배열에만 쓰일 수 있음. 원하는 값을 뽑아내서 다른 배열에 담음
// const arr2=arr.filter((value)=>{
// // console.log(value)
// //결과:
// //reply
// //content-type
// //body
// //content-length

// return value !=='body'
// //(익명함수는 return 생략 가능)
// })

const arr2 = arr.map((value)=>{
    // console.log(value)
    // console.log(obj[value])
    return `${value}:${obj[value]}`
})

// console.log(arr2.join("\r\n"))

arr2.push("") // 이거 없으면 body 부분 띄어지지 않음..ㅠ...
let text = arr2.join('\r\n')
text += "\r\n" + obj.body
console.log(text)


// let str = ''
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i], obj[arr[i]])
//     str += `${arr[i]}:${obj[arr[i]]}`
//     if(i!==arr.length-1){str+=`\r\n`} // 만약에 마지막 애가 아니면 엔터 넣어~
// }

// console.log(str)

const createRequestMessage = (obj) => {
    obj['content-length'] = Buffer.from(obj.body).length
    console.log(obj)

    const keys = Object.keys(obj)
    const arr = keys
     .filter((v)=>{v!=="body"})
     .map((v)=>{v + ":" + obj[v]})
     .join("\r\n")
    
    const text = `${arr}
    
    ${obj.body}`
    return text

}

const obj = {
    reply:true,
    "content-type":"string",
    body:"hello world!",
}

createRequestMessage(obj)