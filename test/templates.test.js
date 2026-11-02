"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { renderDigest } = require("../src/templates");

test("the digest lists each alert and escapes HTML", () => {
  const html = renderDigest("{{#each alerts}}<li>{{this}}</li>{{/each}}", {
    alerts: ["lodash <4.17.21>", "ws"],
  });
  assert.equal(html, "<li>lodash &lt;4.17.21&gt;</li><li>ws</li>");
});
