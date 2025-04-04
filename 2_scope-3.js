// let, const 와 var의 차이

if (true) {
  // let 키워드로 지역변수 선언
  let a = 100;
}
// console.log(a); // 에러남

if (true) {
  // let 키워드로 지역변수 선언
  var b = 200;
}
console.log(b); 

// 전역변수와 지역변수는 스코프에 따라 유효범위가 결정됨
// 그런데 var 키워드로 선언된 변수는 유효범위를 무시하기 때문에
// 사용하는 것을 권장하지 않음