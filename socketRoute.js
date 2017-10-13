function socketApp(io) {

	const userList = {};

	io.on('connection', function(socket) {
		console.log("socket: a user connected");

		// push to client list
		// userList.push(socket)

		socket.on('disconnect', function() {
			console.log("connect break");
			// userList.
		});

		socket.on('login', function(info) {
				var data = JSON.parse(info);
				if(data.passwd == '123456') {
					userList[data.user] = socket;
					// console.log(userList)
					socket.emit('login', 'true');
				}
		})

		socket.on('code', function(data) {
			console.log(data)
			socket.broadcast.emit('code', data);
		});
	})
}


module.exports = socketApp;
