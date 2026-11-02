"use strict";

const moment = require("moment");

// Digests go out at 09:00 UTC on the day after `now`.
function nextDigest(now) {
  return moment.utc(now).startOf("day").add(1, "day").add(9, "hours").toISOString();
}

module.exports = { nextDigest };
