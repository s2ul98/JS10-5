// Q11
const name = '아리';
const age = 17;

console.log(`${name}의 나이는 ${age}입니다`);

// Q15
const studentName = '소영';
const score = 75;
// 점수가 60점 이상이면 합격, 그렇지 않으면 불합격
// => 조건문 또는 삼항연산자를 사용하여 작성

// 조건식 ? 결과1 : 결과2
const result = score >= 60 ? '합격' : '불합격';

console.log(`${studentName}의 점수는 ${score}점이고, ${result}입니다`);

// Q16
// 사람의 정보를 담은 객체를 생성
// 그리고 객체에 주소를 추가
const person = {
  name:'철수',
  age: 20
}

// 속성을 변수에 저장
const key = 'addrs';

// 변수를 key로 사용하요 프로퍼티를 추가
person[key] = '서울시 강남구';
console.log(person);