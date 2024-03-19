//태그들 찾기!
//textarea, buttonm, ul
//let 변수명 => 특수문자 _, $만 사용가능!

let input = document.getElementById("memo-input"); //textarea
let button = document.getElementById("today"); //button
let list = document.getElementById("memo-list"); //ul

// 버튼을 클릭했을 때 input에 적힌 글자 가져와서
// li태그 생성하고 ul 태그에 추가하기

button.addEventListener("click", function(){

  // textarea 속의 글자를 가져와서 memo변수에 저장되어라!
  let memo = input.value;

  // 만약에 textarea에 아무것도 없는게 아니라면
  if (memo != ""){
   let li = document.createElement("li"); //li태그 만들거야

   li.innerText = memo;

   li.style.cursor = "pointer" //커서 바꾸기
   li.style.fontSize = "25px"
   li.style.listStyle = "none"
   li.style.margin = "10px"
   li.style.padding = "10px"
   li.style.backgroundColor = "#FBF9F1"
   li.style.boxShadow = "3px 3px 5px #6d969c"
    //스타일을 먼저 정하고, 자식 노드로 추가해주기!

    //span태그 생성
    let span = document.createElement("span");
    span.innerText = new Date().toLocaleString();
    span.style.color = "#6d969c";
    span.style.float = "right";
    span.style.fontWeight = 600;

    li.appendChild(span); //span을 li에 추가

   list.appendChild(li); //list 태그에 자식 노드로 추가 

   //li 태그를 삭제하고 싶다? 부모노드.removechild();
   li.addEventListener("click", function(){
    //alert => 버튼이 "확인"
    // confirm => "확인", "취소"
    let ok = confirm("정말 삭제하시겠습니까?"); // 사용자가 확인을 누르면 true, false

    if (ok == true){
      li.parentNode.removeChild(li);
    }
      
   
  });

  //textarea 글자 지우기
  input.value="";
  }
});