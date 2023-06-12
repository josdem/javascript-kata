const compute = (amount, keyboards, usbs) => {
  const pairs = []
  keyboards.forEach((k) => {
    usbs.forEach((u) => {
      pairs.push([k, u])
    })
  })
  const prices = []
  pairs.forEach((pair) => prices.push(pair[0] + pair[1]))
  return Math.max(...prices.filter((it) => it <= amount))
}

exports.compute = compute
