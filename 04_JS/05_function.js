helloWorld1(); // 함수 선언문으로 작성된 함수는 함수 는 함수 선언 전에도 가능

// 함수 정의
// 1. 명시적 함수 선언 -> 함수 선언문
function helloWorld1() {
  console.log("helloWorld1");
}

// 함수 호출
helloWorld1();

// 2. 함수 표현식
const helloworld2 = function () {
  console.log("helloWorld2");
};

helloworld2();

//2-2. 화살표 함수
const helloWorld3 = () => {
  console.log("helloWorld3");
};

helloWorld3();

//return 사용
//return: 반환값-> 함수 내부 코드의 "최종 결과값"
/*ㅊonsole.log()로 콘솔을 찍는 것에서 그치지 않고, 
함수 내부 코드의 최종 결과 값을 저장하고 보관하기 위한 키워드
-함수 블럭 안에서 return 키워드를 만나면 함수 실행 중단
*/

//인자 없이 return값만 가지고 있는 함수
function onePlusone() {
  return 1 + 1;
}

// onePlusone(); // ->2
console.log(onePlusone()); // -> console.log(2) -> 콘솔창에 2 찍음

function numPlusone(num) {
  return num + 1;
}

console.log(numPlusone(5)); //num -> 5 -> 5+! -> 6을 반환 -> console.log(6)

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(5, 7)); //12

//함수의 반환값을 변수에 저장해서 사용
const result = sum(5, 7);
console.log(result);

const result2 = sum(100, 35);
console.log(result2);

function hello(name) {
  alert(`Hello! ${name}`);
}

const username = "layla";
hello(username);
