// Q22
const color = {
  color1 : "red",
  color2 : "blue",
  color3 : "green",
}
const { color1, color2, color3 } = color;

console.log(color1, color2, color3);


// Q23
const fruits = {
  fruits1 : "사과",
  fruits2 : "바나나",
  fruits3 : "오렌지",
  fruits4 : "키위",
}

const { fruits1, fruits4 } = fruits;

console.log(fruits1, fruits4);

// Q24
function printElements([first, , third]) {
  console.log(`${first}와 ${third}`);
}

let elements = ["사과", "바나나", "오렌지", "키위"];