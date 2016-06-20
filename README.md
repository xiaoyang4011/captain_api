#Captain_API base framework

###Tech Stack

 - express 4.x （express最新版本，学习成本，框架稳定考虑 不选择koa）
 - mongoose（mongodb）
 - bluebird（Promise/A+实现）
 - co (Generator + yield)
 - mocha（测试）
 
###Getting Start

```js
git clone https://github.com/xiaoyang4011/captain_api
npm install
node captain_api.js
```


---

###CO Examples
```js
var co = require('co');

co(function *(){
  // yield any promise
  var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
  // => [1, 2, 3]
}).catch(onerror);

// errors can be try/catched
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message); // "boom"
 }
}).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}

```
###目录结构
```js
├── LICENSE
├── README.md
├── Gruntfile.js
├── package.json
├── process.json
├── captain_api.js
├── bin
├── node_modules
│   ├── beeper_api
│   ├── express
│   ├── bluebird
│   ├── co
│   ├── body-parser
│   ├── mongoose
│   ├── validator
│   ├── lodash
│   └── log4js
├── server
│   ├── api
│   │   ├── captain
│   │   ├── event
│   │   ├── task
│   ├── config
│   │   ├── env
│   │   ├── config.js
│   │   ├── express.js
│   │   ├── init.js
│   │   ├── log4js.js
│   ├── lib
│   ├── model
│   ├── util
│   ├── app.js
│   └── routes.js
└── test
```

说明

 - process.json 线上pm2部署 $ pm2 start process.json
 - config/env是各个环境配置文件

---

###推荐

[co][1]
[bluebird][2]
 


  [1]: https://github.com/tj/co
  [2]: https://github.com/petkaantonov/bluebird
