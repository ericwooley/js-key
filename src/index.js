function ensureArray (keys = []) {
  if (!Array.isArray(keys)) {
    keys = keys.split('.')
  } else {
    keys = keys.slice(0)
  }
  return keys
}

function getLastObject (keys, object) {
  return keys.reduce((prev, key) => {
    if (!prev[key]) throw new Error(JSON.stringify(prev) + ' does not contain ' + key)
    return prev[key]
  }, object)
}

export function set (object, keys = [], newValue = val => val) {
  keys = ensureArray(keys)
  const lastKey = keys.pop()
  const lastObject = getLastObject(keys, object)
  if (typeof newValue === 'function') {
    lastObject[lastKey] = newValue(lastObject[lastKey])
  } else {
    lastObject[lastKey] = newValue
  }

  return object
}

export function get (object, keys = []) {
  keys = ensureArray(keys)
  const lastKey = keys.pop()
  const lastObject = getLastObject(keys, object)
  return lastObject[lastKey]
}

export default {get, set}
