[1교시] - 복습
# TCP

# 네트워크
관계 연결
전화로 비유를 많이 함! -> 휴대폰

통화 건 사람--------- 통화 받는 사람
client -------------- server // 프로세스가 두 개 필요함



[2교시]
추상화 vs 구현
`연예인` 이라는 카테고리는 광범위한 묶음들?
연예인 중에 `아이유`를 좋아한다면 나는 연예인을 공부해야 할까, 아이유를 공부해야 할까?
`연예인`이 프로그램, `아이유`가 express


[3교시]
브라우저도 클라이언트! 즉, 프로세스
브라우저가 요청하는 메세지를 간과해서는 안됨~~~~~~


# HTTP 프로토콜 이해
http : 서버와 클라이언트가 데이터를 주고 받기 위한 프로토콜(규칙)


## HTTP의 특징
- HTTP는 연결 상태를 유지하지 않는 비연결성(Stateless)
    - 연결 후에 tcp 연결을 끊는다.
        - tcp 연결은 논리적. 즉, 논리적 연결만 끊는 것!

- HTTP 기본 골격 요청이 있으며, 무조건 응답을 준다. 성공이면 성공, 실패면 실패라고 대답이 반드시 필수

## HTTP 동작방식
브라우저에서 `URI`를 입력시 동작 형태 -> 노트에 있음


## HTTP 요청메세지
```
GET /user?name=mood HTTP/1.1
Host : 127.0.0.1:3000
User-agent: 어쩌구
Content-type: application/x-www-form 어쩌구

name=mood
```
요청&응답 메세지는 크게 두 가지 형태로 읽어야 한다. 
빈칸을 기준으로 위는 `header`, 밑(실질적으로 맨 아래)은 `body`
(html의 header와 body랑 다름!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
혹은 `request header`, `request body`. 얘네를 묶어서 `request message`

요청&응답 메세지는 첫번째줄이 가장 중요하다! 이 첫번째줄을 *startline* 이라고 부름.
(예시에서는 `GET /user?name=mood HTTP/1.1`)

*startline*
```
GET /user?name=mood HTTP/1.1

[요청메서드] [요청 URI] [HTTP 프로토콜 버전]
```


