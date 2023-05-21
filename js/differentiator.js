const diff = (a, b) => {
  return a.filter((item) => !b.includes(item))
}

exports.diff = diff
