/*
1. export 
*/
// export const perfectScore = 100;

// export const sum  = (num1, num2) => {
//     return num1 + num2;
// };

// export const avg = (num1, num2) => {
//     return (num1 + num2) / 2;
// };

/*
2. 별칭
*/
// export const perfectScore = 100;

// export const sum  = (num1, num2) => {
//     return num1 + num2;
// };

// export const avg = (num1, num2) => {
//     return (num1 + num2) / 2;
// };

/*
3. export default
*/
// const subtract = (num1, num2) => {
//     return num1 - num2;
// };

// export default subtract;
/*
export default는 모듈에서 하나의 대표 값을 보내는 문법이다.  
해당 모듈을 불러오는 쪽에서는 원하는 이름으로 자유롭게 가져올 수 있다.


특징:
- 모듈당 딱 하나만 사용할 수 있다.
- import 할 때 중괄호 없이, 아무 이름이나 붙여서 가져온다.
- "이 파일의 기본 기능(대표 기능)"을 외부에 제공할 떄 사용한다.

```javascript
export default subtract;

const subtract = (num1, num2) => {
    return num1 - num2;
};
```

위와 같이 작성하면 `Uncaught ReferenceError: Cannot access 'subtract' before initialization` 에러 메세지가 출력된다.


이유:
- subtract는 let/const로 선언되기 전까지 일시적 사각지대(TDZ)에 놓여 있다.
- 그런데 `export default subtract;`가 파일의 가장 위에 있으므로 아직 초기화되지 않은 subtract를 참조한다 -> ReferenceError 발생.
*/

/*
4. export default 응용
*/
const perfectScore = 100;

const sum  = (num1, num2) => {
    return num1 + num2;
};

const avg = (num1, num2) => {
    return (num1 + num2) / 2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

export default {
    perfectScore,
    sum,
    avg,
    subtract
}