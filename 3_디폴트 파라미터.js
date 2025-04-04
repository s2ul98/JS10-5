// 함수의 매개변수에 기본값 설정하기

// 곱셈 함수 정의
// 두 수를 입력받아 곱을 출력
// 오류를 방지하기 위해 매개변수 검사하기
// function multiply(a, b) {
//   // console.log(a * b);
//   console.log(a, typeof a);
//   console.log(b, typeof b);
// }

// multiply(2); // NaN => 잘못된 값

// function multiply(a, b) {
//   if(b == undefined) {
//     console.log('b'는 잘못된 값입니다);
//     b = 1;
//   }
//   console.log(a * b);
// }

function multiply(a, b = 1) {
  console.log(a * b);
}
multiply(5, 5) // a:5, b:5 => 25

// 전달빋은 텍스트를 출력하는 함수 정의
// 맵개변수에 초기값 설정
// 전달받은 인자가 있으면 그대로 사용
// 없으면 초기값 사용
function func(str = '전달받은 피라미터가 없어요') {
  console.log(str);
}
func();