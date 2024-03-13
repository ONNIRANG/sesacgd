console.log("connected");

/*조건문
 -어떤 조건에 따라 논리구조를 나눔
 -각조건을 분기라고 함
 -조건에 따라 서로 다른 문장을 실행
 
/*
if문의 기본구조
if(조건) {
  조건이 참일 경우 실행될 코드
}
*/

//조건이 하나만 있는 경우
if (5 > 3) {
  console.log("5는 3보다 크다.");
}

if (5 > 7) {
  console.log("조건이 false이므로 이 코드블럭은 실행되지 앟고 넘어감");
}

// 입력받은 값을 numner값으로 강제 형변환
//let number = Number(prompt("숫자를 입력해 주세요."));
let numner = 8;
//입력받은 수가 10보다 클때 if 다음의 코드블럭을 실행
//입력받은 수가 10보다 작거나 같을 때 else문의 코드블럭을 시행
/*if (number > 10) {
  console.log("입력받은 수가 10보다 큽니다.");
} else {
  console.log("입력받은 수가 10보다 작습니다.");
}
*/

//else if문
//if else문에 다른 조건을 추가하는 형식
//else문은 하나만 사용 가능, 하지만 else if문은 여러개 사용 가능
//여러개의 분기로 나누고 싶으면 else if문을 여려개 사용해서 조건을 많이 사용할  수 있음

/*if (number > 10) {
  console.log("입력받은 수가 10보다 큽니다");
} else if (numner === 10) {
  console.log("입력받은 수가 10입니다.");
} else {
  console.log("입력받은 수가 10보다 작습니다.");
}*/

console.clear();

//성적 계산하는 프로그램
//const score = Number(prompt("성적을 입력해주세요."));//

//조건이 TRUE가 나온다면 해당 코드 블럭을 실행하고, 나머지 조건문은 실행되지 않음
//위의 조건을 통과하고 다음 조건문을 실행하는 경우 위의 조건들이 모두 FLASE였음을 잊지 않기
/*if (score > 100) {
  console.log("점수가 잘못 입력되었습니다.");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}*/

/*const age = Number(prompt("나이를 입력해 주세요."));
if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else {
  console.log("유아");
}*/

// 다른 방법

/*if (age < 0) {
  console.log('음수 값이 들어왔습니다.');
} else if (age < 8) {
  // age가 0보다 크거나 같으면서 8보다 작은 경우
  console.log('유아');
} else if (age < 14) {
  console.log('초등학생');
} else if (age < 17) {
  console.log('중학생');
} else if (age < 20) {
  console.log('고등학생');
} else if (age < 150) {
  console.log('성인');
} else if (age >= 150) {
  console.log('나이로 들어올 수 없는 값이 입력되었습니다.');
*/

// 추가
// if (age >= 150 && age < 0) {
//   console.log('나이로 들어올 수 없는 값이 입력되었습니다.');
// } ... 나머지 코드')

console.log("-----------------------------");

const userId = "user01";
const userPw = "1234qwer";

//조건문 함수로 구현
//JS DOC
/*
 *입력받은 아이디와 비밀번호가 맞는지 확인후 적절한 알림참 띄움
 */
function loginUser() {
  const inputId = prompt("아이디를 입력해주세요.");
  const inputPw = prompt("비밀번호를 입력해주세요.");

  if (userId === inputId) {
    if (userPw === inputPw) {
      console.log("로그인성공");
      alert(`안녕하세요, ${inputId}님`);
    } else {
      console.log("로그인 실패");
      alert("비밀번호를 다시 입력해 주세요");
    }
  } else {
    alert("아이디를 다시 입력해주세요.");
  }
}

//loginUser();

//Switch문
//switch의 괄호 안과 case의 조건으로 비교식이 들어갈 수 없음
/*
1. 변수 x의 값과 첫번째 case문의 값 3을 비교 합니다.
2. 두 값이 동일하다면 : (콜론) 뒤의 코드가 실행
3. break문을 통해 해당 스코프에서 빠져나옴
4. 만약 첫번째 case문의 값과 x가 다르다면 다음 case문의 값과 비교
5. 모든 case문의 값과 x의 값이 다르다면 default문 다음의 코드가 실행
*/
// break필수작성
// default문 생략가능
let userType = "user";

//switch문의 괄호 안에는 조건이 아닌 값이 들어감
//case에도 조건이 아닌 값을 작성
switch (userType) {
  case "admin":
    console.log("관리자입니다.");
    break;

  case "user":
    console.log("user입니다.");

    //break 작성하지 않으면 case 4를 실행하고 싶을 때  case 5까지 모두 실행됨
    //해당 스코프를 빠져나가지 못하는 것
    //원하는 코드가 실행된 이후 꼭 break사용해 스코프를 빠져나올 수 있도록 작성
    break;
    console.log("break 이후에 작성된 코드는 실행되지 않아요");
  case 5:
    console.log("x는 5입니다.");
    break;
  default:
    console.log("x는 3,4,5가 아닌 다른 값입니다.");
}

// if문으로 작성한 성적 계산하는 프로그램 switch문 사용하도록 수정

let number = 78;
switch (parseInt(number / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("c");
    break;
  case 6:
    console.log("D");
    break;

  default:
    console.log("F");
}

//삼항연산자
//조건식? 조건이 참일 때 실행될 코드 : 조건이 거짓일 때 실행될 코드

//홀수, 짝수 판별하기

let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}
//삼항연산자로 변환

let result = num % 2 === 1 ? "홀수" : "짝수";
console.log(result);

num % 2 === 1 ? "홀수" : "짝수";

let fruit = "banana";
console.log(fruit === "banana" ? "바나나" : "바나나가 아닙니다.");

let isLoggedIn = true;
isLoggedIn === true
  ? console.log("로그인 유저입니다.")
  : console.log("로그인하지 않은 유저입니다.");

isLoggedIn === true
  ? number > 10
    ? "로그인한 유저인데, number 값이 10보다 큼"
    : "로그인한 유저인데, number 값이 10보다 작음"
  : "로그인하지 않은 유저";

//실습 오전 오후 출력하기

let now = new Date().getHours();

console.log(now < 12 ? "오전" : "오후");
