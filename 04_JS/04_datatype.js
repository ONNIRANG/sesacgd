// 기본형 (Primitive type)
//1. string
//  - 텍스트 정보
//  - 따옴표로 감싸야 함
//  - 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자열임

const myName = "신데렐라";
const email = "glassshoes@google.com";
const gender = "female";
console.log(myName);
console.log(email);
console.log(gender);

const aa = "a";
console.log(aa);

console.log("원하는 텍스트");

console.log(aa, "쉼표"); // 자동으로  띄어쓰기 있음
console.log(aa + "더하기 연산자"); //띄어쓰기 없음 전부연결해서 출력됨

// "안녕 나는 레일라야"
const name = "레일라";
console.log("안녕 나는", name, "야");
console.log("안녕 나는" + name + "야");

// 템플릿 리터럴
// 문자열 내의 변수를 간결하게 표현할 수 있음
// 백틱('') 기호와 달러, 중과호(${}) 사용
console.log("안녕 나는 ${name}야");
const printHello = "안녕 나는 ${name}야"; // --> 문자열로 저장됨

// 2. number

// 숫자 (정수, 소수)
// 연산 가능
let number = 123;
let opacity = 0.7;
let add = 1 + 2;

// 3. boolean
// true, false 중에서 하나의 값을 가지는 논리 요소
let checked = true;
let isShow = false;

// 4.undefined
// - 값도 없고 타입도 지정되어 있지 않은 상태
let undef;
console.log(undef); // undefined
let obj = {
  abc: 123,
};

console.log(obj.abc); //123
console.log(obj.efg); //undefined --> 없는 것 출력하면 undefined

// 5. null
// 빈 값. null 타입으로  타입 존재하지만 값이 없음
// 값이 없다는 것을 의도적으로 명시할 때 사용 -> 개발자가 직접 null값을 할당

let empty = null;
console.log(empty);

// 6. array - 배열
// 순서가 있는 데이터의 묶음

let fruits = ["apple", "orange", "banana", "grape"];
let fruits2 = new Array("apple", "orange", "banana", "grape");

console.log(fruits);
console.log(fruits[2]); // 2번 인덱스 요소를 뽑아 콘솔에 찍기

let arr = [1, "str", false, null, undefined];

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters = [
  "사",
  "스",
  "자",
  "크",
  "진",
  "안",
  "리",
  "이",
  "가",
  "수",
  "림",
  "나",
  "아",
  "으",
  "차",
  "운",
];

console.log(letters[12] + letters[7] + letters[1] + letters[3] + letters[10]);

//배열 응용
//다차원 배열
//배열 안에 배열이 있는 형태
const korean = [
  ["가", "갸", "거", "겨"],
  ["나", "냐", "너", "녀"],
  ["다", "댜", "더", "뎌"],
];
console.log(korean);

console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);
console.log(korean[1][1]);

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters2[3][0] +
    letters2[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

// 7. object- 객체
// 배열은 순서가 있는 바년에 객체는 키-값 형태로 작성
// {key1: value1, key2: value2,...}

let cat = {
  name: "장화",
  age: 13,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};

//점표기법
console.log(cat.name); //장화
console.log(cat.age); //13
console.log(cat.mew);

//대괄호 사용
console.log(cat["name"]); //장화
console.log(cat["age"]); //13

// 변경, 추가 가능
cat.like = "layla";
console.log(cat);
cat.name = "홍련";
console.log(cat);

/*
js자료형 -> 데이터타입
-기본형 (primitive)
  -strimg
  -number
  -boolean
  -null
  -undefined
  -객체 (object)
    -array(배열)
    -object(객체)-> 키_값을 쌍으로 가지고 {중괄호} 안에 감싸여 작성된 것
    */

//js의 이상한 자동 형변환
let a = "3";
let b = 2;
let c = "10";

// 문자 +문자 -> 문자의 나열
console.log(a + c); //'310'
console.log(c - a); // 7
console.log(a * c); //30
console.log(c / a); //계산됨

//숫자+문자
console.log(b + a); //'23'
console.log(b - a); // -1 -> 문자가 숫자로 변환되어 계산됨

//자기소개 실습
const introduce = {
  name: "SARA",
  interest: ["bible-reading", "education", "skincare"],
  favoritecolor: "green",
};

console.log(introduce);

// 자료형 확인
// typeof
// 피연산자의 데이터 타입을 문자열로 변환(
console.log("-----------------------------------------------");
console.log(typeof "문자열"); // string
console.log(typeof 234); //number
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof NaN); // NaN : Not a Number -> number
let und;
console.log(typeof und); //undefined

// prompt("값을 입력해주세요");

//형변환
console.log("-----------------------------------------------");
//1.?-> 문자

let str1 = true;
let str2 = 132;
let str3 = null;

console.log(String(str1)); //true
console.log(typeof String(str1)); // string
console.log(String(str2)); //'123'
console.log(String(str3)); //'null'
console.log(str1.toString()); //'true'
console.log(str2.toString()); //'123'

// 2. ?-> 숫자
let n1 = true;
let n2 = false;
let n3 = "12345";
let n4 = "123.9";

console.log(Number(n1)); //1 -> true
console.log(Number(n2)); //0 -> false

console.log(Number(n3)); //12345
console.log(Number(n4)); //123.9
console.log(parseInt(n3)); //12345
console.log(parseInt(n4)); //123소수점 버림
console.log(parseFloat(n4)); //123.9 소수점 남음

let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;

console.log(avgScore);

//prompt 사용
let mathScore2 = Number(prompt("수학점수를 입력하세요"));
let engScore2 = Number(prompt(`영어점수를 입력하세요`));

let avgScore2 = (mathScore2 + engScore2) / 2;

console.log(avgScore2);
alert(`당신의 평균점수는 ${avgScore2}점입니다.!`); //템플릿 리터럴 사용!
