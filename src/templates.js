"use strict";

const Handlebars = require("handlebars");

// Renders a digest email from its template and the alerts in it.
function renderDigest(source, data) {
  return Handlebars.compile(source)(data);
}

module.exports = { renderDigest };
