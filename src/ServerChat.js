const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app); //creating a server instance
const io = socketIO(server);
io.on("connection", socket => {
  console.log("Client Connected");

  socket.on("client:message", data => {
    console.log(data.username);
    console.log(data.message); //message recieved, now broadcast to everyone else
    data.fromMe = false;
    socket.broadcast.emit("server:message", data);
  });

  socket.on("client:typingStatus", username => {
    socket.broadcast.emit("server:typingstatus", username);
  });

  // socket.on("client:online", username => {
  //  socket.broadcast.emit("server:online", username);
  // });
});

server.listen(4001, () => {
  console.log("listening to port");
});
