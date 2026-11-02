"use strict";

const http = require("node:http");
const { attachLive } = require("./live");

const server = http.createServer((req, res) => res.end("ok"));
attachLive(server);
server.listen(process.env.PORT || 3001);
