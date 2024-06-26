// jquery
// $('css 선택자').동작함수();
// - $ : 식별자
// - $() : HTML 요소를 선택하는 함수
// 해당하는 모든 요소가 선택됨 -> querySelectotAll과 비슷
// 여러개의 요소에 동일한 동작을 구현할 때 반복문으로 돌면서 지정할 필요 X
// 한 번에 여러 요소를 동시에 조작할 수 있음 ->  jquery 함수가 알아서 처리함

console.log($(".testSelector"));

// $() 선택자는 우리가 이전에 선택했던 방법과 다르게 jquery를 사용하기 위해
// 만들어진 함수이기 떄문에 원래 document.querySelector 등으로 선택했던 요소를
// 다루는 방식으로 다룰 수 없음
// 아래 코드 에러 발생
// $('.testSelector').addEeventListener('click', () => {
//   alert('클릭됨');
// });

// document.querySelector('.testSelector').addEeventListener('click', () => {
//   alert('클릭됨');
// });

// -------------------------------------------------

// .val() : input의 값을 가져오기 & 수정하기
// input 태그를 선택해 해당 input의 value를 가져오거나 수정함
function useVal() {
  // value 값 가져오기
  // jquery .val() 사용
  const value = $("input").val();

  // js
  // const value = document.querySelector('input').value;

  console.log(value);

  // value 값 수정하기
  // jquery
  $("input").val("수정할 값 작성하기");

  // js
  // document.querySelector('input').value = 'js 사용해 값 수정하기';
}

// -------------------------------------------------

// attr('속성', '속성값') : 요소의 속성을 추가, 수정, 가져오기
function useAttr() {
  // jquery
  // input 요소에 placeholder 속성 추가하기
  $("input").attr("placeholder", "이름을 입력하세요.");
  // inpur 요소의 type을 checkbox로 변경
  $("input").attr("type", "checkbox");
  // npur 요소의 placeholder 속성 가져오기
  console.log($("input").attr("type"));

  // js
  // setAttribute와 getAttribute 사용해 속성의 값을 추가, 수정, 가져왔음
}

// -------------------------------------------------

// text() : 요소의 content 중 text만 가져오거나 수정
function useText() {
  // #span의 content 중 text만 가져오기
  console.log($("#span").text());

  // #span의 text 수정하기
  $("#span").text("text 메서드 사용해서 수정함");

  // js의 innerText와 동일
}

// -------------------------------------------------

// html() : 요소의 content(html 형식)를 가져오거나 수정
function useHtml() {
  // #span의 content(html) 가져오기
  console.log($("#span").html());

  // #span의 content(html) 수정하기
  $("#span").html("이건 html 메서드 사용해서 <b>수정한거야</b>");
}

// -------------------------------------------------

// .css() : css(style) 변경
function useCss() {
  // 변수에 담아 사용하기
  const span = $("#span");
  span.css("font-size", "30px");

  // js
  // document.querySelector('#span').style = 'font-size: 30px;';
}

// -------------------------------------------------

// appen(), prepend(), before(), after()
function useAppend() {
  // append() : 선택된 요소의 마지막에 인자로 작성된 요소 추가
  // 텍스트 작성 가능, html 형식으로 작성 시 반영됨
  // .container 마지막 자식으로 요소 추가
  $(".container").append(`<div class="box red"></div>`);

  //prepend() : 선택된 요소의 첫번째 자식으로 인자에 작성된 요소 추가
  // $(".container").prepend(`<div class="box yellow"></div>`);

  //before() : 선택된 요소의 앞에 인자로 전달된 요소 추가
  //red라는 클래스를 가진 모든 요소의 앞에 div.orange요소 추가됨
  //반복문으로 돌면서 지정하지 않아도 모든 요소에 지정됨-> jquery가 알아서 함
  $(".red").before(`<div class="box orange"></div>`);
  //css선택자를 자세하게 작성해서 특정요소만 선택할 수 있음
  $(".container .red:first-child").before(`<div class="box orange"></div>`);

  //after() : 선택된 요소의 위에 인자로 전달된 요소 추가(형제)
  $(".orange").after(`<div class="box yellow"></div>`);
}

//remove(), empty()
function useRemove() {
  //remove() : 선택된 요소 삭제
  //red라는 id를 가진 요소를 삭제
  $("#red").remove();

  //empty() : 선택된 요소의 모든 content 삭제
  //CONTAINER라는 클래스를 가진 요소의 CONTENT

  $(".container").empty();
  //js는 empty없음 -> innerHTML 속성을 반 문자열로 하면 동일하게 가능
  //
}
//------------------------------------
function useParent() {
  //parnet() : 직계부모요소
  //=== js parentNode
  console.log("parent", $("#red".parent));
  // parents() : 부모, 조상, 포함 모든 상위요소
  console.log("parent", $("#red".parents));

  //next(): 자신의 다음 형제요소
  //===js nextElementSbling
  console.log("next", $("#red").next());

  //prev(): 자신의 이전 형제요소
  //===js previousElementSibling

  console.log("prev", $(".container .box:nth-child(2)").prev());

  //children() : 자신의 자식요소
  //=== js children
  console.log("children", $(".container").children());
  // .container요소의 모든 자식에게 배경색 노란색 지정
  $(".container").children().css("background-color", "yellow");
}

//-----------------------------------------------------------

//addClass(), removeClass(), hasClass(), toggle
function controlClass() {
  $("#controlClass").addClass("red"); //클래스 추가

  $("#controlClass").removeClass("text"); // 특정클래스 제거
  // $('#controlClass').removeClass();//모든 클래스 제거

  $("#controlClass").hasClass("red"); // 클래스 포함여부 t/f

  console.log($("#controlClass").hasClass("red")); //클래스 포함여부 t/f

  $("#controlClass").toggleClass("red"); //클래스토글

  //js클래스 토글하기
  //document.querySelector('#controlClass').classList.toggle('red');
}
