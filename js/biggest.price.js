const regex = /-?[0-9]+.?[0-9]+/g

const biggest = (data) => {
  return Math.max(...data.filter((it) => it.match(regex)))
}

exports.biggest = biggest
