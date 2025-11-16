/*
1. exports 변수의 속성으로 내보내기
*/
// exports.perfectScore = 100;

// exports.sum  = (num1, num2) => {
//     return num1 + num2;
// };

// exports.avg = (num1, num2) => {
//     return (num1 + num2) / 2;
// };

// exports.subtract = (num1, num2) => {
//     return num1 - num2;
// };

/*
2. exports 변수의 속성으로 내보내기
*/
// exports.perfectScore = 100;

// exports.sum  = (num1, num2) => {
//     return num1 + num2;
// };

// exports.avg = (num1, num2) => {
//     return (num1 + num2) / 2;
// };

// exports.subtract = (num1, num2) => {
//     return num1 - num2;
// };

/*
3. module.exports를 사용하여 하나의 객체로 묶어서 내보내기
*/
const math = {};

math.perfectScore = 100;

math.sum  = (num1, num2) => {
    return num1 + num2;
};

math.avg = (num1, num2) => {
    return (num1 + num2) / 2;
};

math.subtract = (num1, num2) => {
    return num1 - num2;
};

module.exports = math;