// rest 파라미터를 활용하여 학생들의 시험점수를 계산하는 프로그램을 구현

// 매개변수 : 과목명, 학생
// 결과 : 특정과목의 평균점수
function calcAvgScore(subject, ...students) {
  // console.log(subject); // eng
  // console.log('과목명:', subject);
  // console.log('학생수:', students);
  
  // 학생이 영어점수를 가지고 있으면 true, 없으면 false
  // filter 함수는 true가 반환되면 값을 유지, 아니면 제거

  // 영어 점수만 있는 학생 찾기
  // students(배열)이 가지고 있는 filter 메소드 사용
  // filter 함수의 인자는 함수
  // 그 함수의 배개변수는 vlalue, index, arr
  // 그 함수의 리턴값은 boolean
  const filterList = students.filter((student)=>{
    return student[subject] !== undefined;
    // object가 가지고 있는 영어점수 꺼내기
    // object에서 key값을 사용해서 값 꺼내기
    // 1번쨰 방법 : key를 그대로 해석하여 student.subject
    // 2번쨰 방법 : subject를 변수로 사용하여 student.eng
    // console.log(student.subject); // undefined
    // console.log(student[subject]); // student['eng'] => 80
    // return true;
  });

  // 영어 점수의 합계 -> 누적값 -> reduce 함수 사용
  // 인자 : 함수, 초기값
  // 그 함수의 인자 : 누적값, 배열의 요소
  // 그 함수의 인자 : 누적값
  filterList.reduce((total, vlalue)=>{
    console.log(total, vlalue);
    return total + student[subject]; // total + student['eng']
  }, 0);
  console.log('${subject} 점수의 합계: ${sum}');

  // 학생수
  const count = filterList.length;

  // 평균점수를 반환
  return (sum / count).toFixed(1);
}

// 학생리스트
const student1 = {name: '짱구', eng: 90, math: 80, kor: 70};
const student2 = {name: '철수', eng: 78, math: 10, kor: 88};
const student3 = {name: '훈이;', eng: 90, math: 80, kor: 70};
const student4 = {name: '맹구', eng: 90};
const student5 = {name: '유리', math: 80, kor: 70};

// 첫번째 인자 : 과목명
// 나머지 : 학생 리스트 (개수 상관x)
// 모든 학생의 영어 평균 구하기
const result = calcAvgScore('eng', student1, student2, student3, student4, student5);

console.log('전체 영어 평균 점수는 ${result1}점 입니다'); 

const result2 = calcAvgScore('math', student1, student2, student3);

const result3 = calcAvgScore('kor', student4, student5);
console.log('맹구와 유리의 국어 평균 점수는 ${result3}점 입니다');