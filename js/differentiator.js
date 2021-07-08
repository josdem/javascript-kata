const diff = (a, b) => {
  return a.filter(number => !b.includes(number))
}

exports.diff = diff