"use strict";

import { fruits, numbers, Student, students } from "./data.js";

/*
# reduce()
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.<br/>

## 사용 방법
<배열>.reduce(리듀서 함수, 초기값);

## 리듀서 함수
리듀서 함수는 네 개의 매겨변수를 갖는다.  
- 누적값 (acc)
- 현재값 (cur)
- 현재 인덱스 (idx)
- 원본 배열 (src)

리듀서 함수의 반환 값은 누적 값에 할당되고 최종 결과는 이 누적 값이 된다.
*/

const result = numbers.reduce((acc, cur, idx, src) => {
    console.log("acc: ", acc, "cur: ", cur, "idx: ", idx);
    return acc;
}, 0);

console.log("결과", result);

/*
## 연습 문제

### 1. numbers의 모든 요소를 순회하면서 요소의 합을 출력하시오.
*/
console.log(
    "numbers 요소의 합",
    numbers.reduce((acc, cur) => {
        return acc + cur;
    }, 0)
)

/*
### 2. fruits의 요소 중 중복된 값을 제외한 새로운 배열을 출력하시오.
*/
const resultArray = [];

// fruits.reduce((acc, cur) => {
//     if (resultArray.includes(cur) === false) {
//         console.log("cur: ", cur, "resultArray: ", resultArray);
//         return resultArray.push(cur);
//     }
// }, resultArray)

console.log(
    "fruits 요소 중 중복된 값을 제외한 새로운 배열",
    fruits.reduce((acc, cur) => {
        if (acc.includes(cur) === false) {
            acc.push(cur);
        }
        return acc;
    }, [])
);
/*
최초 acc에는 초기값이 저장된다.
리듀서 함수의 반환 값은 acc에 할당된다.

reduce()는 배열을 순회하면서 내가 원하는 뭔가 누적된 값을 만들어내는데 사용할 수 있을 것 같다.
*/