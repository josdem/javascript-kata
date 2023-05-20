const finder = (first, second) => {
  return first.filter((it) => second.includes(it))
}

exports.finder = finder
