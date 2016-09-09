express    = require('express')
formidable = require('formidable')
# router 

api_router = express.Router();

api_router.get '/sockets', (req, res)->
  res.json io.sockets.sockets.map (a)-> a.id

api_router.get '/start', (req, res)->
  res.statusCode = 204
  res.send()
  io.sockets.emit("start")

api_router.post "/push", (req, res)->
  form = new formidable.IncomingForm()
  form.encoding = "utf-8";
  form.uploadDir = "./uploads"
  form.parse req, (err, fields, files)->
    console.log err, fields, files
    oldPath = './' + files.file._writeStream.path
    newPath = './uploads/' + Date.now() + "_" + files.file.name
    fs.rename oldPath, newPath, (err)-> if (err) then throw err;
  res.statusCode = 204
  res.send()

export.router = api_router