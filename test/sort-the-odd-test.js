const { assert } = require('chai')
const { sorter } = require('../sort-the-odd.js')

describe('Sorting odd numbers', () => {
    
    it('it sort an empty array', () => {
        assert.deepEqual(sorter([]), [])
    })

    it('it sort some arrays', () => {
        assert.deepEqual(sorter([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
        assert.deepEqual(sorter([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
    })

    it('it sort special arrays', () => {
        assert.deepEqual(sorter([-5, 17, -16]), [-5, 17, -16])
        assert.deepEqual(sorter([1, 5, 2, 8, 3, 4, 11]), [1, 3, 2, 8, 5, 4, 11])
    })
})