/*
Given a collection with numbers: [31 , 34, 34, 56, 12, 35, 24, 34, 69, 18]
Write a function that finds most popular number in the array, in this case 34 because it is the number that appears most often.
 */

const find = (numbers) => {
    let max = 0

    return numbers.reduce((accomulator, it) => {
        let counter = numbers.filter(number => number === it).length
        if (counter > max) {
            max = counter
            accomulator = it
        } 
        return accomulator
    }, 0)
}

module.exports.find = find