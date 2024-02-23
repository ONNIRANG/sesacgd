console.log("connected!");

// 변수 선언하고 사용하기
/*
var키워드
1. 변수선언-> 값 할당
2. 변수선언과 값할당을 동시에
*/
// 변수선언
var varName; // undifind
//변수할당
varName = "layla";
console.log(varName);
// 변수선언과 값 할당을 동시
var varName2 = "layla2";
// 변수 재할당
varName = "Yuki"; // varName 변수값이 "layla"->"yuki"변경
console.log(varName);
// console.log("varName");

//변수 선언과 값할 당을 동시에
var varName2 = "layla2";

//var의 이상한점
//1. 변수를 동일한 이름으로 재선언 할 수 있음

var varName = "lily";
console.log(varName);

aa = 123;
console.log(aa);

//1. 변수선언-> 값 할당
//2. 변수선언과 값할당을 동시에
//
//변수선언
let letName;
//값할당
letName = "홍길동";
console.log(letName); //홍길동 출력

// 변수선언과 값 할당을 동시에
let letName2 = "심청이";
console.log(letName2); //심청이 출력

//let letName2 = "심봉사";// error: 중복선언 불가

//console.log(letName2)

letName2 = "심봉사"; //값 재할당 가능
console.log(letName2);

// const 키워드
// -반드시 변수선언과 값 할당이 동시에 이루어져야 함
// -변수 재선언, 재할당 불가능
// -사용처 : 변하지 않는 값을 변수에 저장할 때 사용

//const constName; // error: 선언과 동시에 값 할당 필요
const constName = "layla";
console.log(constName); //layla

/* 정리
  - var :es6 이전에 사용되던 변수선언 키워드 ->
  -let: 변수선언 키워드
    - 변수선언-> 값 할당
    -변수 중복 선언은 불가능
    -변수 재할당은 가능 (값을 수정할 수 있음)
  -const : 상수선언 키워드
    -상수: 변하지 않는 값
    -변수선언과 값 할당을 동시에 해야 함
    -재선언, 재할당 불가능

    식별자 규칙
    :이름을 지정할 때 사용하는 단어 (변수명, 함수명 등)
      -키워드 사용 불가
        -키워드 : 특별한 역할을 이미 하고 있는 단어
        -ex. var, let, const, if, function, for, return, ...
        -숫자로 시작 불가
        -특수문자는  _, $ 만 허용
        -공백문자는 사용 불가

    사용가능한 식별자
    a, name, name1, name$, my_name, myName
    */
