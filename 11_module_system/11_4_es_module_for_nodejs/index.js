import { perfectScore, sum, avg } from "./math.js";

console.log('perfectScore: ', perfectScore);
console.log('sum: ', sum(80, 10));
console.log('avg: ', avg(80, 90));
/*
```bash
node 11_4_es_module_for_nodejs/index.js
```

위처럼 실행하면 에러가 발생한다.
이때 package.json 파일에 `{ "type": "module" }`을 작성하면 NodeJS 환경에서 `ES Module`을 사용할 수 있다.
*/