const diff = (a, b) => {
  return a.length === 0 ? a : a.filter(number => !b.includes(number))
}

exports.diff = diff