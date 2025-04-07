const preson = {
  firstName: "길동",
  lastName: "홍",
  age: 20,
  email: "go@gmail.com"
}

// // 객체 안에서 필요한 프로퍼티만 추출
// // 객체 분해 : {추출할 프로퍼티} = 객체
// // 존재하지 않는 key를 사용하며면 undefined가 나옴
// const { firstName, lastName, a } = preson;
// console.log(firstName, lastName, a);

// // 객체에 없는 프로퍼티를 꺼내면서 기본값 설정
// const {a = '기본값'} = preson;

// console.log(a); // 기본값

// 함수의 정의
// 사람의 나이와 메일을 매개변수로 입력
// 함수의 매개변수에 구조분해 문법을 사용
// 객체에서 나이와 메일 프로퍼티를 추출
function func({age, email}){
  console.log(age, email);
}

// 위에서 정의한 객체에서 나이와 메일을 사용
// 매개변수로 객체를 통째로 전달
func(person);