
const counter = (candles) => {
    return candles.filter(it => it == Math.max(...candles))
}

module.exports.counter = counter