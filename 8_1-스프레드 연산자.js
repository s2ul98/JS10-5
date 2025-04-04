// 배열 분해
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 두 배열을 하나로 합치기
const arr3 = [...arr1, ...arr2]; 
const arr = [1, 2, 3, 4, 5, 6];


// ... => 스프레드 연산자
console.log(arr3);


// 문자열 분해하기
const str = 'cd';

const arr11 = ['a', 'b', ...str]; 
console.log(arr11); 

// 스프레드 연산자를 사용하요 객체 합치기
const obj1 = {name: '둘리', age: 10};
const obj2 = {address: '인천 연수구'};

const newObj = {...obj1, ...obj2};

console.log(newObj); 


// 문자열 분해
// 문자열에 스프레드 연산자를 사용하며면 각 문자로 분해됨
const str1 = '안녕하세요';
console.log(...str);

const str2 = 'hello';
console.log(...str2);

// 스프레드 연산자를 사용하여 문자열을 배열로 변환
const str3 = [...str];
console.log(str3);