const { assert } = require("chai")
const { maskify } = require('../maskarator.js');

describe('maskify', () => {

    it("Maskarading some strings", () => {
        assert.strictEqual(maskify('4556364607935616'), '############5616')
        assert.strictEqual(maskify('1'), '1')
        assert.strictEqual(maskify('11111'), '#1111')
    })
});