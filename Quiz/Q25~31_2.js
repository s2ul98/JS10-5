// Q25
const str = "I have 2 apples and 3 oranges."; 

// g : 전역검사
const regex = /[0-9]/g;
const regex2 = /\d/g;

console.log(str.match(regex));

// Q26
const str2 = "Hello, JavaScript is fun!";

// 'a', 'e', 'i', 'o', 'u' 중 포함돈 문자 찾기 => 범우;
const regex3 = /[aeiou]/g;

// string 객체가 제공하는 함수를 사용하여 검사
// 전역으로 검사할 때는 exec대신 match를 사용
console.log(str2.match(regex3));
// 정규표현식이 제공하는 함수를 사용하여 검사
console.log(regex3.exec(str2));

// Q29
const str3 = "baanaaana";

// a 문자가 하나 이상 연속된 부분을 찾기
// + => 하나 이상 연속
const regex4 = /a+/g;

console.log(str3.match(regex4)); //[ 'aa', 'aaa', 'a' ]

// Q31
const str4 = "Hello, World! How are you today?";

// 대문자를 모두 찾기 => 범위
const regex5 = /[a-z A-Z]/g;

console.log(str4.match(regex5)); //[ 'H', 'W', 'H', 'I', 'Y' ]