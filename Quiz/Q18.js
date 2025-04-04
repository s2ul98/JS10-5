const book = {
  title : '위대한 게츠비',
  author : 'F. 스콧 피츠제럴드',
  publicationYear : 1925
}

console.log("원본객체: " + book);
console.log("원본객체: " + JSON.stringify(book));

const copyBook = { ...book };
console.log("복사된객체: " + JSON.stringify(copyBook));

copyBook.publishedYear = 2023;
console.log("원본객체의 출판년도: " + book.publishedYear);
console.log("복사된객체의 출판년도: " + copyBook.publishedYear);