/*
1. 전개 구문(spread syntax)을 통하여 불러오기
*/
// const { perfectScore, sum, avg } = require('./math');

// console.log('perfectScore: ', perfectScore);
// console.log('sum: ', sum(80, 10));
// console.log('avg: ', avg(80, 90));
// console.log('anyName: ', subtract(100, 80));
/*
Node.js 실행 방법:

```bash
node 11_3_commonjs/index.js
```
*/

/*
2. 묶어서 불러오기
*/
// const math = require('./math');

// console.log('perfectScore: ', math.perfectScore);
// console.log('sum: ', math.sum(80, 10));
// console.log('avg: ', math.avg(80, 90));
// console.log('anyName: ', math.subtract(100, 80));

/*
3. 묶어서 불러오기
*/
const math = require('./math');

console.log('perfectScore: ', math.perfectScore);
console.log('sum: ', math.sum(80, 10));
console.log('avg: ', math.avg(80, 90));
console.log('anyName: ', math.subtract(100, 80));