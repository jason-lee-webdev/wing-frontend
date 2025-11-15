"use strict";

import { fruits, numbers, students } from "./data.js";

console.log(
    "배가 있나요?",
    fruits.some((fruit) => fruit === "배")
)
// == 와 === 차이?

console.log(
    "숫자에 7이상인 숫자가 있나요?",
    numbers.some((number) => number > 7)
)

// console.log(
//     "수학 점수가 100점인 학생이 있나요?",
//     students.some((student.mathmatics) => students.mathmatics === 100)
// )
// some 함수의 콜백의 인자로 객체의 프로퍼티를 설정할 수 없음!

console.log(
    "수학 점수가 100점인 학생이 있나요?",
    numbers.some((student) => student.mathmatics === 100)
)

console.log(
    "영어 점수가 50점 미만이 학생이 있나요?",
    students.some((student) => student.english < 50)
)

console.log(
    "배가 있나요?",
    fruits.some((fruit, index) => {
        console.log("index:", index, "fruit:", fruit);
        return fruit === "배";
    })
)
// some 함수는 내부적으로 판별 함수가 true가 될 때까지 주어진 배열의 요소를 순회한다.
// 콜백 함수의 { } 안에 ;를 작성하지 않으면 결과가 달라진다!