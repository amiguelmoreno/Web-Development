import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let users = {};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Manejar cuando un usuario se une con un nombre de usuario
  socket.on("join", (username) => {
    users[socket.id] = username;
    io.emit("user-connected", username);
    console.log(`${username} connected`);
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", {
      user: users[socket.id],
      message: msg,
    });
  });

  socket.on("disconnect", () => {
    const username = users[socket.id];
    io.emit("user-disconnected", username);
    delete users[socket.id];
    console.log(`${username} disconnected`);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
