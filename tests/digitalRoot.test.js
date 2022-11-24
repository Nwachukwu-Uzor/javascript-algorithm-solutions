const chai = require("chai");
const assert = chai.assert;
const digitalRoot = require("../algorithms/digitalRoot.js")
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( digitalRoot(16), 7 )
    assert.strictEqual( digitalRoot(456), 6 )
  });
});
