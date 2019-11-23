const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require("./router");

const PORT = process.env.PORT || 5000;

io.on("connection", socket => {
  console.log("New user has connected!");

  socket.on("disconnect", () => {
    console.log("User has left!");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
