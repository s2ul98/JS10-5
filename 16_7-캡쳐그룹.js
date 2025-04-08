// 정규표현식을 사용하여 문자열에서 특정부분만 추출하기

// 원본 문자열
const str = '2025-04-08';

// 정규표현식
// \d => 숫자를 의미
// {4} => 반복횟수. 숫자 4개
const regex = /(\d{4})-(\d{2})-(\d{2})/;

// string 객체가 제공하는 함수를 사용해서 일치하는 부분 찾기
// () => 캡쳐그룹
const result = str.match(regex);

// 첫번째 요소는 일치하는 모든 부분
// 두번째 요소는 첫번쨰 그룹 (연도)
// 세번째 요소는 두번째 그룹 (월)
// 네번째 요소는 세번째 그룹 (일)
console.log(result[1], result[2], result[3]);


const result2 = str.match(regex);
console.log(result2[2]); 