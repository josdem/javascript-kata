
/*
Messages with random data are coming! But we just care about prices!
Your task is to implement a function which removes all non numeric data and return just the biggest price in the collection
messages = ["hi", "2", "@#$%", "32"]
result = 32
*/

const regex = /-?[0-9]+.?[0-9]+/g

const biggest = (data) => {
    return Math.max(...data.filter(it => it.match(regex)))
}

exports.biggest = biggest