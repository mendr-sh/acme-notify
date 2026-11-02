"use strict";

const assert = require("node:assert/strict");
const http = require("node:http");
const test = require("node:test");
const WebSocket = require("ws");
const { attachLive } = require("../src/live");

test("a connected dashboard receives each alert", async (t) => {
  const server = http.createServer();
  const live = attachLive(server);
  await new Promise((resolve) => server.listen(0, resolve));
  t.after(() => {
    live.close();
    server.close();
  });

  const client = new WebSocket(`ws://127.0.0.1:${server.address().port}/live`);
  await new Promise((resolve) => client.on("open", resolve));
  const received = new Promise((resolve) => client.on("message", resolve));
  live.broadcast({ package: "ws" });
  assert.deepEqual(JSON.parse(await received), { package: "ws" });
  client.close();
});
