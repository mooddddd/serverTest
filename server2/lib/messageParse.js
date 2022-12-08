const message = `reply:true
content-type:string
content-length:10

답장주세요!
`
const arr = message.split("\n").filter((v)=>{
        return v !== ""
    }) //하면 빈칸 빼고 배열이 만들어짐 ->빈칸은 아까 가라로 넣어줬잖아 엔터가 안먹혀서
    

//body 내용만 빼오고 싶으면, 어차피 배열 마지막에 붙어있으니까 배열의 마지막 애만 끌어오면 됨?

const body = arr.pop()
const headers = arr
// 해보고 console.log로 어떤 형태로 나오는지 확인해보기

// 배열을 객체형태로 만들고싶을 땐 reduce 사용!!! 개어려움 ㅅㅂ

/*
map : 요소 내용을 바꿀 때
filter : 요소 내용을 제거할 때
reduce : 배열에서 다른 타입으로 변경할 때 [] -> {} */

//reduce는 인자값이 두 개. 첫번째는 callback 함수, 두번째는 초기값(보통 객체로 넣음 - {} 형태)
// headers.reduce(()=>{}, {})
// 근데 콜백함수에는 네 개의 인자값을 또 넣을 수 있음,,,
/*
1. 이전 요소(이전값) -> 콜백함수 두번째에 넣은 애가 나타나넹.........,,,,,.,.,..,,.,.,,
2. 현재 요소
3. 인덱스
4. 배열 전체 값(쓸 일이 ㅇ많이 없긴 함,,)
*/

headers.reduce((acc, value, index)=>{
    const [key, val] = value.split(":")
    acc[key] = val
    return acc
}, {})


const result = (message) => {
    const arr= message.split("\n").filter((v)=>{
        return v !== ""}) 
    const body = arr.pop()
    const headers = arr

    const header = headers.reduce((acc, value, index)=>{
        const [key, val] = value.split(":")
        acc[key] = val
        return acc
    }, {})

    return {
        header: header,
        body: body,
    }
}

result(message)