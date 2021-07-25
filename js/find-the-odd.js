/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

const oddFinder = (array) => {
    let map = new Map()
    array.filter(it => map.set(it, array.filter(n => n == it).length))
    console.log(map)
    return array.length
}

exports.oddFinder = oddFinder