/*
Given a string "aaabbbbcc"
When we call compress method
Then we have a compressed string like "a3b4c2"
 */

const compress = (keyword) => {
  let result = ""
  const map = new Map()
  Array.from(keyword).reduce((acumulator, it) => {
    let counter = Array.from(keyword).filter((number) => number == it).length
    map.set(it, counter)
    acumulator = it
  })
  map.forEach((key, value) => {
    result = result.concat(value, key)
  })
  return result
}

exports.compress = compress
