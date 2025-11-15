"use strict";

import { fruits, numbers, Student, students } from "./data.js";

console.log(
    "숫가가 모두 8이하 인가요?",
    numbers.every((number) => number <= 8)
)

console.log(
    "학생들의 수학 점수가 모두 80점 이상인가요?",
    students.every((student) => student.mathmatics >= 80)
)