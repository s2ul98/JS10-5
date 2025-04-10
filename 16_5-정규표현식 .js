// 플래그와 특수기호를 사용하여 정규표현식 만들기

// 원본 문자열 생성
const str = 'Is this all There is';

// 정규표현식 생성
// [hat] => 'h', 'a', 't' 중 하나를 의미
// g플래그 : 전역에서 검사. 일치하는 모든 문자를 추출
// i플래그 : 대소문자 구분 안함
const regex = /[hat]/gi;
console.log(str.match(regex));

// -------------------------------------------------------

const str2 = '123abc45kkk';

// 정규표현식 생성
// [0-9] => 0~9까지의 숫자 중 하나를 의미
const regex2 = /[0-9]/g;

console.log(str2.match(regex2)); 

// -------------------------------------------------------

const str3 = 'Hellooo';

// + : 문자 o가 하나 이상 연속되는 부분 찾기
const regex3 = /o+/;

console.log(str.match(regex3)); 

// -------------------------------------------------------
const regex4 = /lo/;

console.log(str.match(regex4)); 

// -------------------------------------------------------
// 'lo'가 포함되어있는 부분 찾기 
// * => 1다음에 o가 0개 이상 있는 부분
const regex5 = /lo*/;
console.log(str.match(regex5)); 

// -------------------------------------------------------

const str4 = '1 100 1000';

// '10'과 일치하는 부분 찾기
// ? => 1다음에 0개가 0개 또는 1개 있는
const regex6 = /10/g;

console.log(str.match(regex6));

// -------------------------------------------------------