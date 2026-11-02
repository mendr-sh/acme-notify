"use strict";

const nodemailer = require("nodemailer");

function createMailer(options) {
  const transport = nodemailer.createTransport(options);
  return {
    sendDigest: ({ html, subject, to }) =>
      transport.sendMail({ from: "alerts@acme.example", html, subject, to }),
  };
}

module.exports = { createMailer };
