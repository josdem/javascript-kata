const { assert } = require("chai")
const { fight } = require("../js/hero.vs.dragons")

/**
 * Given number of bullets and number of dragons
 * When I call fight method
 * Then return true if hero wins the fight
 * Note: Each dragon takes 2 bullets to be defeated
 */

describe("", () => {
    it("return true wieh hero is stronger that dragons", () => {
        assert.ok(fight(10,5), "hero should win")
        assert.ok(fight(100,40), "hero should win")        
    })

    it("return false when hero is weaker than dragons", () => {
        assert.notOk(fight(1706635620, 1391914725), "hero should lose")
    })
    
})