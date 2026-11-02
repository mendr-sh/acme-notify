"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { nextDigest } = require("../src/schedule");

test("the next digest is 09:00 UTC the next day", () => {
  assert.equal(nextDigest("2021-03-04T17:30:00Z"), "2021-03-05T09:00:00.000Z");
});
