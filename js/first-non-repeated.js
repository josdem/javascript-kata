/*
Given a numbers collection find fist non-repeated number in that collection
When we have: [25, 25, 18, 18, 18, 36, 1, 2, 2, 34] first non-repeated number is 36
 */

const find = (numbers) => {
  const uniques = []

  return numbers.reduce((accomulator, it) => {
    accomulator = numbers.filter((number) => number === it).length
    if (accomulator === 1) {
      uniques.push(it)
    }
    return uniques[0]
  })
}

module.exports.find = find
