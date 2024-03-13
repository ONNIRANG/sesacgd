// 다른 js파일의 함수나 변수를 불러와 사용하기
//import export문
//export문 : 함수 내보내기
//import문 : 함수 불러오기
//불필요한 코드 반복을 줄이고 효율적인 개발 가능, 유지보수 쉬워짐

//함수 불러오기
import { consoleName } from "./util.js";
//export default 키워드 작성시 중괄호 감싸지 않고 불러옴
import consoleName from "./util.js";

//한 줄로 default 함수와 다른 함수들도 불러올 수 있음
import consoleNameMain, { consoleName, consoleName2 } from "./util.js";

//여러 파일들 import할 수 있음

consoleName("layla");
consoleName2("layla");
consoleNameMain("layla");
