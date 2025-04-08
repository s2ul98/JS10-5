// 원본 문자열 생성
const str = 'Hello World! World!';

// 정규표현식 생성
const regex = /World/;
const regex2 = new RegExp('Word');

// 원본 문자열에 World라는 텍스트가 포함되어있는지 확인 
const result = regex.exec(str);
console.log(result);

// 원본문자열에 World라는 텍스트가 포함되어있는지 확인
// 결과는 boolean으로 반환
const result2 = regex.test(str);
console.log(result2);

// 원본문자열에 World라는 텍스트가 포함되어있는지 확인
// 결과는 index번호로 반환

// 문자열이 제공하는 search 함수를 사용
// 인자는 정규 표현식
const result3 = str.search(regex);
console.log(result3);