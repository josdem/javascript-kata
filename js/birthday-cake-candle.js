/*
It is your birthday! And you want to make it special, so you want to keep only biggest candles in the cake
Your task is to create a function that removes all small candles and just keep the biggest ones.
 */

const counter = (candles) => {
    return candles.filter(it => it == Math.max(...candles))
}

module.exports.counter = counter