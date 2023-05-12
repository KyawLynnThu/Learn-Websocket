let express = require("express");
let socket = require("socket.io");

// app setup
let app = express();

// server setup
let server = app.listen(4000, () => {
  console.log("Server is running on localhost:4000");
});

// route setup
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// socket setup
let io = socket(server);
io.on("connection", (socket) => {
  // console.log("Socket connection connected " + socket.id);
  socket.on("chat", (data) => {
    // console.log(data);
    io.sockets.emit("chat", data);
  });
});
