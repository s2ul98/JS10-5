// 배열 분해
const arr = [1,2,3];

// 각 배열의 요소를 변수에 담기
// 첫번째 요소는 a, 두번째 요소는 b, 세번째 요소는 c
// 배열의 요소를 순차적으로 저장
// [변수] = 배열
const [a, b, c] = arr; 

console.log(a,b,c);

// --------------------------------------
const arr2 = ['a','b','c','d','e'];

// 첫번째 요소는 ch1, 두번쨰 요소는 ch2
// 나머지는 args 배열에 수집됨
const [ch1, ch2, ...args] = arr2; 
console.log(ch1, ch2, args); 

// --------------------------------------

const arr3 = ['a','b','c','d','e'];

// 특정 요서는 건너띄고 저장하기
// 세번째 자리를 비워두고 네번째 요소를 추출
const [ch3, ch4, , ch6] = arr3;

console.log(ch3, ch4, ch6);

// --------------------------------------

const arr4 = ['a','b','c','d','e'];

// 함수의 정의
// 함수의 매개변수에 구조분해 문법을 사용
function func([ch7, ch8 , , ch9]) {
  console.log(ch7, ch8 , ch9);
}

// 배열의 첫번째 요소와 두번째 요소를 한번에 전달
func(['h','e','l','l','o']); 