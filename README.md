# js-key
POJO selectors and modifiers

installation: `npm install --save js-key`

usage:
```js
  import {get, set} from 'js-key'
  const deepObj = {
    test: {
      arr: [
        0, 1, 2, {
          obj: {
            t: 'success'
          }
        }
      ]
    }
  }
  get(deepObj, 'test.arr.3.obj.t') // 'success'
  set(deepObj, 'test.arr.3.obj.t', 'happy day') // returns deepObj
  get(deepObj, 'test.arr.3.obj.t') // 'happy day'
```
