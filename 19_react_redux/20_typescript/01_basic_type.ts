let num: number = 1;
// num='1'// error: number 타입으로 지정한 변수는 문자열로 작성 불가
num = 2;
console.log(num);

let str: string = "str";
//타입작성하기

//원시타입
let isTrue2 = true;
let undef2;
let empty2 = null;

//isTrue2변수는 boolean 타입이라고 직접 작성하지 않아도
//알아서 boolean 임을 추론해 문자열로 재 할당 시 에러 발생
//isTrue1='aa'

//array
//요소의 갯수를 미리 명시할 필요는 없지만
//array요소가 어떤 타입인지는 명시 필요

//배열의 요소가 한가지인 경우
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ["가", "나", "다", "라"];

//배열에 여러개의 타입을 작성하고 싶을 때
let arr1: (number | string)[] = [1, 2, 3, "가", "나", "다"];
let arr2: Array<number | string> = [1, 2, 3, "가", "나", "다"];

//boolean or null or number array요소로 가진 배열
let arr3: (boolean | null | number[])[] = [true, null, false, [4, 22]];
let arr3: Array<boolean | null | number[]> = [true, null, false, [4, 22]];
//
