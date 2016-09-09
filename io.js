export.io_main = (io)->


  io.on 'connection', (socket)->
    console.log("connection", socket.client.id)
    socket.on "echo", (data)-> socket.emit("echo", data)
    socket.on 'disconnect', console.info.bind(console, "socket:disconnect")
