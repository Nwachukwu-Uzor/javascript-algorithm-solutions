const chai = require("chai");
const { assert } = chai;
const { checkCount } = require("../algorithms/duplicateEncode.js");

describe("Check Count Test", () => {
  it("Should return to correct count with the same case", () => {
    assert.equal(checkCount("s", "storages"), 2);
  });
  it("Should return to correct count with the with different cases", () => {
    assert.equal(checkCount("S", "storages"), 2);
  });
});
