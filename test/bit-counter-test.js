const {assert} = require('chai')
const {countBits} = require('../bit-counter.js')

describe('counting bits', () => {
    it('should do basic test', () => {
        assert.strictEqual(countBits(0), 0);
        assert.strictEqual(countBits(4), 1);
        assert.strictEqual(countBits(7), 3);
        assert.strictEqual(countBits(9), 2);
        assert.strictEqual(countBits(10), 2);
    })
})