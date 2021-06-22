const sort = (array) => {
    const odds = array.filter(element => element % 2 === 1 || element % 2 === -1).sort((a, b) => a - b)

    for(let i = 0, j = 0; i < array.length ; i++){
        array[i] = array[i] % 2 === 0 ? array[i] : odds[j++]
    }
     
    return array
}

exports.sorter = sort