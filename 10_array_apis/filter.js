"use strict";

import { fruits, numbers, Student, students } from "./data.js";

console.log(
    "짝수만 출력해주세요",
    numbers.filter((number) => number % 2 === 0)
)

console.log(
    "홀수만 출력해주세요",
    numbers.filter((number) => number % 2 === 1)
)

// console.log(
//     "영어 점수가 90점 이상인 학생들은?",
//     students.filter(student, index => student.english >= 90)
// )
// 화살표 함수 작성 시 인자가 두개 이상일 경우 반드시 ()를 작성해야 한다.

console.log(
    "영어 점수가 90점 이상인 학생들은?",
    students.filter(student => student.english >= 90)
)