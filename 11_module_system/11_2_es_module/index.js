/*
1. import
*/
// import { perfectScore, sum, avg } from "./math.js";

// console.log('perfectScore: ', perfectScore);
// console.log('sum: ', sum(80, 10));
// console.log('avg: ', avg(80, 90));
/*
```javascript
import { perfectScore, sum, avg } from 'math.js';
```

위와 같이 작성하면 `Uncaught TypeError: Failed to resolve module specifier "math.js". Relative references must start with either "/", "./", or "../".` 에러 메세지가 출력된다.
ES Module에서 import 경로는 반드시 URL 형태여야 하는데, "math.js"는 유효한 URL 경로가 아니기 때문이다.
*/

/*
2. 별칭
*/
// import * as math from "./math.js"

// console.log('perfectScore: ', math.perfectScore);
// console.log('sum: ', math.sum(80, 10));
// console.log('avg: ', math.avg(80, 90));
/*
모듈에 별칭을 붙여 불러올 수 있다.
*/

/*
3. export default
*/
// import anyName from "./math.js";

// console.log('anyName: ', anyName(100, 80));

/*
4. export default 응용
*/
import math from "./math.js"

console.log('perfectScore: ', math.perfectScore);
console.log('sum: ', math.sum(80, 10));
console.log('avg: ', math.avg(80, 90));
console.log('anyName: ', math.subtract(100, 80));