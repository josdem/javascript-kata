const {assert} = require('chai')
const {counter} = require('../js/birthday-cake-candle.js')

describe('Keep biggest candles', () => {

    it('validates biggest candles', () => {
        assert.strictEqual(counter([]), [])
        assert.strictEqual(counter([1]), [1])
        assert.strictEqual(counter([3, 2, 1, 3]), [3, 3])
    })
})