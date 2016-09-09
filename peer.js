export.peer_main = (server)->
  server.on "connection", -> console.info("peer:connection")
  server.on "disconnect", -> console.info("peer:disconnect")