const oddFinder = (array) => {
  return array.find((n) => array.filter((it) => it === n).length % 2)
}

exports.oddFinder = oddFinder
