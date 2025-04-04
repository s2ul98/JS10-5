// Q1
function greet(name, greeting = "안녕하세요") {
  return `${greeting}, ${name}님!`;
}

console.log(greet("철수", "반갑습니다"));
console.log(greet("훈이"));

// Q2
// 전달 받은 값이 있으면 그대로 사용, 없으면 0사용
function calcAvgScore(name, eng = 0, math = 0, kor = 0) {
  // 총점
  const total = eng + math + kor;
  // 평균
  const avg = total / 3;
  
  console.log(`${name}님의 평균 성적은 ${avg.toFixed(2)}점입니다.`);
  
}

calcAvgScore("철수", 85, 90, 78);
calcAvgScore("훈이", 80); //("훈이", 80)=> NaN(잘못된 숫자)


// Q3
function printPerson(name, age, ...hobbies) {
  console.log(
    `${name}의 나이는 ${age}살이고, 취미는 ${hobbies.join(", ")}입니다.`
  );
}

printPerson("맹구", 5, "축구", "독서", "영화 감상");
printPerson("유리", 5, "소꼽놀이");

// 사람의 정보를 입력받아 정보를 출력하는 함수
// 첫번째 매개 변수 : 이름
// 두번째 매개 변수 : 나이
// 세번째 매개 변수 : 취미...(개수 상관없이)
// rest 파라미터 : 개수와 상관없이 배열로 수집 
function func(name, age, ...hobby){
  // console.log(name, age, hobby);

  // 배열이 가지고 있는 함수를 사용하여 문자열 결합
  const str = hobby.join(","); // 구분자는 ,

  console.log("${name}의 나이는 ${age}살이고, 취미는 ${str}");
}

// 첫번째 사람 : 맹구 5살 취미는 축구, 독서, 영화감상
func("맹구", 5, "축구", "독서", "영화감상");
// 두번째 사람 : 유리 5살 취미는 소꿉놀이
func("유리", 5, "소꿉놀이");
