const sort = (array) => {
    const odds = array.filter(element => element % 2).sort((a, b) => a - b)
    return array.map(element => element % 2 ? odds.shift() : element)
}

exports.sorter = sort