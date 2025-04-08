// 정규표현식 생성
const regex = /a/;

// 문자열이 제공하는 match 함수를 사용하여 a가 포함되어 있는지 확인
// 결과는 값 + 위치로 반환됨
const result = 'abcd'.match(regex);
console.log(result);

console.log(regex.exec('abcde'));


// 정규표현식에 특수문자(플래그) 사용하기
// i : 대소문자 구분 안함

// 정규표현식 생성
const regex2 = /a/;
const result2 = 'abcde'.match(regex2);
const result3 = 'Abcde'.match(regex2);

console.log(result2);
console.log(result3);


// 정규표현식에 특수문자(플래그) 사용하기
// g : 패턴에 해당하는 모든 문자를 추출

// 정규표현식 생성
const regex4 = /a/g;

const result4 = 'abcdea'.match(regex4);

console.log(result4);


// 정규표현식에 특수문자(플래그) 사용하기
// ig : i플래그 + g플래그 조합

// 정규표현식 생성
const regex5 = /a/ig;
const result5 = 'Abcdea'.match(regex5);

console.log(result5); // 대문자 a, 소문자 a