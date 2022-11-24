const chai = require("chai");
const assert = chai.assert;
const sum = require("../algorithms/sum.js")

describe("Sum function test", () => {
    it("Should return the correct sum from a given set of arguments", () => {
        assert.equal(sum(4, 3, 1), 8)
    })
})