const io = require("socket.io")(3000, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	console.log("New user has joined");
	socket.emit("chat-message", "Welcome");
});
