const {assert} = require('chai')
const {diff} = require('../differentiator.js')

define('Get difference', () => {
    it('should get differences in arrays', () => {
        assert.equal(diff([], [4,5]), [])
        assert.equal(diff([3,4], [3]), [4])
        assert.equal(diff([1,8,2], []), [1,8,2])
        assert.equal(diff([1,2,3], [1,2]), [3])
    })
});