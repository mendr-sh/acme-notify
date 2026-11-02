"use strict";

const WebSocket = require("ws");
const socketIo = require("socket.io");

// Sends each alert to every connected dashboard, over plain WebSockets
// and over socket.io for the older dashboards.
function attachLive(server) {
  const wss = new WebSocket.Server({ path: "/live", server });
  const io = socketIo(server, { path: "/socket.io" });
  return {
    broadcast(alert) {
      const message = JSON.stringify(alert);
      for (const client of wss.clients)
        if (client.readyState === WebSocket.OPEN) client.send(message);
      io.emit("alert", alert);
    },
    close() {
      wss.close();
      io.close();
    },
  };
}

module.exports = { attachLive };
