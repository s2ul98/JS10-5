// 객체 복사하기 (얇은 복사->완벽한 복사가 아님)
const obj = { name : '짱구', age: 5 };
const copyObj = obj;

// 복사한 object로 값 변경
copyObj.age = 6;

console.log(obj)
console.log(copyObj)
// copy한 object를 수정했더니, 원본데이트도 함께 변경됨 => odject는 참조변수로 주소를 저장한다

//  ------------------------------------
const obj1 = { name : '짱구', age: 5 };

// 스프레드 연산자를 사용하여 객체를 완벽히 복사하기
const copyObj1 = { ...obj1 };

// 복사한 객체로 값 변경하기
copyObj1.age = 6;


console.log(obj1)
console.log(copyObj1)
// 카피한 객체로 값을 변경해도, 원본 데이터에는 영향이 없다
// 카피한 객체는 완벽히 새로운 객체로 생성이 됐다

// ------------------------------------
// 스프레드 연산자를 사용하여 객체 복사하기

// 더 복잡한 구조의 객체 만들기
// object 안에 object가 있는 경우
const obj2 = {
  name : '짱구',
  age: 5,
  favoriteFood: {
    first : '초코비',
    second : '초밥'
  }
}

// 객체 복사하기
// 스프레드 연산자로 객체를 분해하여 새로운 객체 생성
const copyObj2 = { ...obj2 };

// 복사한 객체로 값 변경하기
copyObj2.age = 6;
copyObj2.favoriteFood.first = '돈까스';

console.log(copyObj2);
console.log(copyObj2);
// 카피한 객체를 수정했더니 원본데이터도 함께 수정됨 => 완벽하게 복사가 안됨
// object안에 favoriteFood도 참조타입이므로, 주소가 복사됨

// 여러 프로퍼티가 참조변수 일때는, 스프레드 연산자로 해결하기 어려움

// JSON 객체를 사용하여 객체를 복사하기
// object -> JSON.stringify(obj) :
const str = JSON.stringify(obj2);

const copyObj = JSOM.parse(str);

// 복사한 객체로 값 변경
copyObj.favoriteFood.first = '햄버거';

console.log(obj, typeof obj);
console.log(copyObj, typeof copyObj);

// 복사한 객체로 값을 바꿔도 원본 데이터에는 영향이 없음
// 따라서 복잡한 객체를 복사할때는 JSON 객체를 사용할 것


