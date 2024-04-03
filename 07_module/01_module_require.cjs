/*
commonjs에서 모듈 사용을 위해
pakage.json파일에 'type': "common.js"를 추가해야 함

npm init 명령어를 통해 자동으로 해당 프로젝트의 package.json 생성가능

cjs확장자는 commonjs 를 사용하는 파일이라는 것을 알림
*/

// 01_module01.cj 사용
const person = require("./01_module01.cjs");

//01_module02 에서 exports한 모든 데이터가 person에 저장
console.log(person);

//PERSON에 저장된 변수, 클래스, 함수 사용
//변수사용
console.log(person.colors);
//함수사용
console.log(person.sayName("장원영"));
//클래스 사용
const chaewon = new person.Person("채원", 20);

console.log(chaewon);
console.log(chaewon.getBornYear());

//가져오고 싶은 변수, 함수, 클래스만 가져오기
const { sayName } = require("./01_module01.cjs"); //구조분해 할당
sayName("안유진");

//----------------------------------------------------------------------------
//01_module02.cjs 사용

const { colors2, sayName2 } = require("./01_module02.cjs");
console.log(colors2);
sayName2("강동원");
