/*
Given a collection with numbers: [34 , 31, 34, 56, 12, 35, 24, 34, 69, 18]
Write a function that finds most popular number in the array, in this case 34 because it is the number that appears most often.
 */

const find = (numbers) => {
    let max = 0
    let item = 0

    numbers.forEach(it => {
        let counter = numbers.filter(number => number === it).length
        if(counter > max){
            item = it
            max = counter
        }
    })
    return item
}

module.exports.find = find