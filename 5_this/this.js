// -- 호출하는 놈에 따라 달라지는 this
// let person = {
//     fullname: '이재선',
//     age:20,
//     printThis: function() {
//       console.log(this);
//       console.log('this === person', this === person);
//       console.log('this === window', this === window);
//     }
// }
// person.printThis(); // 객체의 메서드 호출
// let printThis = person.printThis; // 여기서 pritnThis는 person.printThis 함수 참조만 변수에 복사한 것.
// // 이제 더 이상 person과 연결된 상태가 아니고, 단순히 "함수"로 호출된다.
// printThis(); // 일반 함수 호출
// // 일반 함수 호출이므로 this는 브라우저: window, Node.js: global, strict mode: undefined

// let person1 = {
//   name: '홍길동1',
//   printThis: printThis,
// };
// person1.printThis();
// let person2 = {
//   name: '홍길동2',
//   printThis: printThis,
// };
// person2.printThis();
// let person3 = {
//   name: '홍길동3',
//   printThis: printThis,
// };
// person3.printThis();

// let btn = document.querySelector('button')
// btn.addEventListener('click', function() { // 이벤트 핸들러
//   console.log(this);
//   console.log('this === btn', this === btn);
// })
// // 일반 함수로 쓰면 이벤트가 걸린 DOM 요소
// // 화살표 함수로 쓰면 상위 스코프의 this

// -- 화살표 함수에서 this
// let person = {
//   name: '이재선',
//   age: 20,
//   hello: function () {
//     setTimeout(() => {
//       console.log(this);
//     }, 1000);
//   }
// }
// person.hello();
// // 화살표 함수는 자신만의 this를 갖지 않고, 선언된 위치의 상위 스코프 this를 그대로 사용함.
// // 따라서 this는 person을 지칭

// -- strict mode에서 this
// 'use strict';
// function printThis() {
//   console.log(this);
// }
// printThis();
// // -> undefined 출력

// -- 화살표 함수를 지양하는 경우
// let person = {
//   name: '이재선',
//   printThis: () => {
//     console.log(this);
//   }
// }
// person.printThis();
// -> window 객체 출력
// let btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   console.log(this);
// })
// // -> window 객체 출력

// -- bind
// function printThis() {
//   console.log(this);
// }
// let person1 = {
//   name: '홍길동1',
// }
// let person2 = {
//   name: '홍길동2',
// }
// let printThis1 = printThis.bind(person1); // this에 person1이 바인딩 된 함수를 return?
// printThis1();
// let printThis2 = printThis1.bind(person2);
// printThis2(); // person2를 예상했으나 출력 결과는 person1. bind()는 한번만 적용된다.

// -- this를 어떻게 사용하나?
// let person = {
//   name: '이재선',
//   age: 20,
//   hello: function () {
//     setTimeout(function () {
//       console.log(this);
//       console.log(this.name);
//       console.log(this.age);
//     }.bind(this), 1000);
// }
// person.hello();
// bind = person.hello.bind(person);
// bind();