"use strict";

import { numbers, students } from "./data.js";

// const result = numbers.map(function (number) {
//     return number * 2
// })

// 명령줄이 한줄 일때, 함수를 아래처럼 작성할 수 있음
const result = numbers.map((number) => number * 2)
console.log(result);

console.log(
    '영어 점수',
    students.map((student) => student.english)
);

