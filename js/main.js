let target = document.querySelector('#dynamic');


function randomString(){
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split('');
  
  return selectStringArr;
}

function resetTyping(){
  target.textContent = ""; // 타겟에 출력되어있는 배열을 먼저 지우고.
  dynamic(randomString()); // 함수 재실행
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){
//console.log(randomArr);
  if(randomArr.length > 0){
    target.textContent += randomArr.shift(); // 랜덤한 배열의 맨 앞 요소를 타겟 변수의 내용에 담는다.
    setTimeout(function(){
      dynamic(randomArr) // 재귀함수
    },80);
  }else{
    setTimeout(resetTyping, 3000);
  }
}


dynamic(randomString()); // 최초 함수 실행(어떤건 괄호 쓰고 어떤건 괄호 안쓰는거지?)

function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);

/*  출처 jayprogram 블로그

먼저 Element.classList의 반환형은 'DOMTokenList'입니다.

이 DomTokenList의 메서드는 많은 것이 있지만, 오늘은 세가지만 살펴보려고 합니다.

 

Element.classList.toggle

toggle, 전등 스위치를 껐다 켰다 하는 행위 처럼, 0과 1이 반복되는 행위를 의미합니다.
즉, 기존 값이 0이었다면 1로 바뀌고 기존 값이 1이었다면, 0으로 바뀌게 됩니다.
그래서 toggle 메서드는 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가하는 메서드입니다.

 

Element.classList.add

명시된 클래스를 추가하는 메서드입니다.

 

Element.classList.remove

명시된 클래스를 제거하는 메서드입니다. */

