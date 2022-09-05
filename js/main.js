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