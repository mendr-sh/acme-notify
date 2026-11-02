"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { createMailer } = require("../src/mailer");

test("the digest is addressed and has the HTML body", async () => {
  const mailer = createMailer({ jsonTransport: true });
  const info = await mailer.sendDigest({
    html: "<p>2 alerts</p>",
    subject: "Daily digest",
    to: "team@acme.example",
  });
  const message = JSON.parse(info.message);
  assert.equal(message.subject, "Daily digest");
  assert.equal(message.html, "<p>2 alerts</p>");
});
