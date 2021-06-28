const { assert } = require('chai')
const { generate } = require('../phone-number-generator.js')

describe('generate phone numbers', () => {
    it('should format numbers', () => {
        assert.strictEqual(generate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) , '(123) 456-7890')
        assert.strictEqual(generate([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), '(111) 111-1111')
        assert.strictEqual(generate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), '(123) 456-7890')
    })
})