// 단어를 여러개 입력 받아서 하나의 문장으로 만드는 함수
// rest 파라미터 : 
// 전달받은 인자를 배열로 수집
function func(a, ...words) {
  console.log(a, words);

  // 배열의 join 함수 사용
  const text = words.join(" ");
  console.log(text);
}
func('hi', 'this', 'is', 'html'); 