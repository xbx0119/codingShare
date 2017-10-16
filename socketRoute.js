function socketApp(io) {

    const userList = [];

    const rooms = [];

    io.on('connection', function(socket) {
        console.log('socket: a user connected');

        socket.on('disconnect', function() {
            console.log('connect break');
        });

        socket.on('login', function(info) {
            var data = JSON.parse(info);
            if(true) {
                const user = {
                    name: data.user,
                    socket: socket
                };
                userList.push(user);
                socket.emit('login', 'true');
            }
        });

        socket.on('getRooms', function() {
            socket.emit('getRooms', rooms);
        });


        socket.on('addroom', function(info) {
            var id = getRandomRoomId();
            while(rooms[id] != undefined) {
                id = getRandomRoomId();
            }

            var creator = parseSocket2User(socket);

            const room = {
                id: id,
                creatorname: creator.name,
                name: info.name,
                intro: info.intro,
                passwd: info.passwd,
                listeners: []
            };

            rooms.push(room);

            console.log('add room success');
            socket.emit('addroom', 'true');

            userList.forEach(function(item) {
                item.socket.emit('newroom', rooms);
            });

        });


        socket.on('enterroom', function(id) {
            var room = getRoomById(id);
            console.log('enterid: ' + id);

            if(room.creatorname != parseSocket2User(socket).name) {
                room.listeners.push(socket);
                socket.emit('enterroom', 'true');
            }else {
                socket.emit('enterroom', 'false');
            }
        });


        // for creator, only creator can emit code
        socket.on('code', function(data) {
            console.log(data);

            var room = findRoomByCreator(socket);
            console.log(room);
            if(room) {
                room.listeners.forEach(function(listener) {
                    listener.emit('code', data);
                });
            }

        });
		
    });


    function getRandomRoomId() {
        return Math.floor(Math.random() * 10000);
    }


    function parseSocket2User(socket) {
        var user = userList.find(function(item) {
            return item.socket == socket;
        });
        return user;
    }

    function findRoomByCreator(socket) {
        var user = parseSocket2User(socket);

        var room = rooms.find(function(item) {
            return item.creatorname == user.name;
        });
        return room;
    }

    function getRoomById(id) {
        var room = rooms.find(function(item) {
            return item.id == id;
        });

        return room;
    }

}

module.exports = socketApp;
