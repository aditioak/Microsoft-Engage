//Creating a  Signalling server using socket.io, express and peer

const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

const { v4: uuidV4 } = require("uuid");

app.use("/peerjs", peerServer);

// Calling our html page to open
app.set("view engine", "ejs");
app.use(express.static("public"));

//Rendering home.ejs
app.get("/", (req, res) => {
  res.render("home");
});

// Creating a unique room-id
app.get("/call", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

//Rendering room.ejs
app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

// Handling connections
io.on("connection", (socket) => {
  // Connecting the user to other users
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    console.log(roomId);
    socket.to(roomId).emit("user-connected", userId);
    // sending the message from one user to other
    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message);
    });
  });
});

server.listen(process.env.PORT || 3030);
