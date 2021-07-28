const {assert} = require('chai')
const {biggest} = require('../js/biggest-price.js')

describe('it should select biggest price', () => {

    it('get biggest price', () => {
        assert.strictEqual(biggest(['hi', '2.0', '@#$%', '32.0']), 32.0)
        assert.strictEqual(biggest(['pair', 'car', '-10.0']), -10.0)
        assert.strictEqual(biggest(['main', '3.14', 'yaml']), 3.14)
    })
})