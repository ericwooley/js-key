/* globals describe, it, beforeEach */
import {expect} from 'chai'
import {get} from '../src/index'

describe('get', () => {
  let deepObj, shallowObj, arr
  beforeEach(() => {
    shallowObj = {test: 'success'}
    deepObj = {
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
    arr = [0, deepObj]
  })
  it('should get a deeply nested item', () => {
    expect(get(deepObj, 'test.arr.3.obj.t')).to.equal('success')
    expect(get(deepObj, ['test', 'arr', 3, 'obj', 't'])).to.equal('success')
  })
  it('should get an item on the first level', () => {
    expect(get(shallowObj, 'test')).to.equal('success')
  })
  it('should work on arrays', () => {
    expect(get(arr, '1.test.arr.3.obj.t')).to.equal('success')
  })
})
