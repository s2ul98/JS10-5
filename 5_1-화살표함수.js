// 일반 함수를 화살표 함수로 바꾸기
// 화살표 함수를 사용하는 이유 :
// 코드를 간단하게 작성하기 위해서..

// // 일반 함수
// const hello = name => 'hello' + name;
//   return 'hello' + name;

// 화살표 함수에서
// 구현부의 코드가 여러줄일때는 {}블록을 생략할 수 없다
const func = () => {
  console.log('aa');
  console.log('bb');
}
  
func();