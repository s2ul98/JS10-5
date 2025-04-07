// 객체분해 문법을 활용하여 영화 정보 추출하기

const movie = {
  title :'인셉션',
  director : '크리스토퍼 놀란',
  year : 2010,
};

// 객체문해
// {추출할 프로퍼티} = 객체
const { title : mavieTitle, year : mavieYear } = movie; 

console.log(mavieTitle, mavieYear); 