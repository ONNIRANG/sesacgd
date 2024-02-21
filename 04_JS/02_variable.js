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
