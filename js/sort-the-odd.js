/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

const sort = (array) => {
    const odds = array.filter(element => element % 2).sort((a, b) => a - b)
    return array.map(element => element % 2 ? odds.shift() : element)
}

exports.sorter = sort