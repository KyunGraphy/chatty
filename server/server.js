const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const {
    addNewUser,
    removeExistUser,
    getUser,
    getUsersInARoom,
} = require("./users");

const router = require("./router");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

// app.use(cors());
app.use(router);

io.on("connection", (socket) => {
    console.log("Socket connected", socket.id);
    socket.on("join", ({ userName, roomId }, callback) => {
        const { error, user } = addNewUser({ id: socket.id, userName, roomId });

        if (error) {
        return callback(error);
        }

        socket.join(user.roomId);

        socket.emit("message", {
        user: "admin",
        textContent: `${user.userName} has joined!`,
        });

        socket.broadcast.to(user.roomId).emit("message", {
        user: "admin",
        textContent: `${user.userName} has joined!`,
        });

        io.to(user.roomId).emit("roomDetails", {
        roomId: user.roomId,
        users: getUsersInARoom(user.roomId),
        });

        callback();
    });

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);

        if (user) {
        io.to(user.roomId).emit("message", {
            user: user.userName,
            textContent: message,
        });
        }

        callback();
    });

    socket.on("disconnect", () => {
        const user = removeExistUser(socket.id);

        if (user) {
        io.to(user.roomId).emit("message", {
            user: "admin",
            textContent: `${user.userName} has left!`,
        });

        io.to(user.roomId).emit("roomDetails", {
            roomId: user.roomId,
            users: getUsersInARoom(user.roomId),
        });
        }
    });
});

httpServer.listen(5000, () => console.log("listening on port 5000"));
