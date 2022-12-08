// 확장성
1에서 100까지 출력하세요
3의 배수일 땐 fizz 출력 //3
5의 배수일 땐 buzz 출력 //5
3의 배수면서 5의 배수일 때는 fizzbuzz를 출력하세요 //15

for(let i = 1; i<=100; i++){
    if(i%3===0&&i%5===0){
        console.log("fizzbuzz")
    } else if(i%3===0){
        console.log("fizz")
    } else if(i%5===0){
        console.log("buzz")
    } else console.log(i)
}



// 인자값은 총 세 개
// 첫번째는 input n의 값(1~100)
// 두번쨰는 몇의 배수인지(3, 5)
// 세번째는 출력 내용
const multiples = (num, mul, print) => {
    // return num%mul===0
    if(num%mul===0){
        return print
    } else {
        return false
    }
}

console.log(multiples(15, 5, "buzz"))
console.log(multiples(16, 5, "buzz"))
console.log(multiples(17, 5, "buzz"))

for(let i=0; i<=100; i++){
    const a = multiples(i, 5, "buzz")
    const b = multiples(i, )
    if(a===false){
        console.log(i)
    } else if(a===ture){
        console.log(a)
    }
}