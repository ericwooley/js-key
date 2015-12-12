/* globals describe, it, beforeEach */
import {expect} from 'chai'
import {set, get} from '../src/index'

describe('set', () => {
  let deepObj, shallowObj, arr
  beforeEach(() => {
    shallowObj = {test: 'failure'}
    deepObj = {
      test: {
        arr: [
          0, 1, 2, {
            obj: {
              t: 'failure'
            }
          }
        ]
      }
    }
    arr = [0, deepObj]
  })
  it('should set a deeply nested item', () => {
    deepObj = set(deepObj, 'test.arr.3.obj.t', 'success')
    expect(get(deepObj, 'test.arr.3.obj.t')).to.equal('success')
  })
  it('should work with an array as a key', () => {
    deepObj = set(deepObj, ['test', 'arr', 3, 'obj', 't'], 'success')
    expect(get(deepObj, ['test', 'arr', 3, 'obj', 't'])).to.equal('success')
  })
  it('should set an item on the first level', () => {
    shallowObj = set(shallowObj, 'test', 'success')
    expect(get(shallowObj, 'test')).to.equal('success')
  })
  it('should work on arrays', () => {
    arr = set(arr, '1.test.arr.3.obj.t', 'success')
    expect(get(arr, '1.test.arr.3.obj.t')).to.equal('success')
  })
  it('should work with a function callback', () => {
    arr = set(arr, '1.test.arr.3.obj.t', (oldVal) => {
      expect(oldVal).to.equal('failure')
      return 'success'
    })
    expect(get(arr, '1.test.arr.3.obj.t')).to.equal('success')
  })
})
