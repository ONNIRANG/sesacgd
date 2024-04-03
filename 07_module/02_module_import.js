// package.json에서 'type' : 'module'로 수정

// //02_module01.js사용
// import { flowers, getFlower, getFlowersLength } from "./02_module_01.js";

//한번에 export 한 변수, 함수등을 가져오는 방법
//*을 사용해 한번에 가져오는 방법은 메모리 효율, 처리속도 측면에서 좋지 않음
//되도록이면 사용할 변수명이나 매서드 명을 명시하는 것이 좋음
import * as flower from "./02_module_01.js";

console.log(flower);
// getFlowersLength();
// console.log(getFlower(0));
// console.log(getFlower(10));

//--------------------------------

//02_module02.js사용
import { animals, showAnimals } from "./02_moduel02.js";

showAnimals();
console.log(addAnimal("horse"));

//03_module.js  사용
import saysStatus from "./03_module.js";

// saysStatus("sleepy");
// saysStatus("hungry");
// saysStatus("borning");
// saysStatus("hard");
// saysStatus("happy");

//한번에 내보낸 sayStatus2사용

saysStatu2("sleepy");
saysStatus2("hungry");
saysStatus2("borning");
saysStatus2("hard");
saysStatus2("happy");
