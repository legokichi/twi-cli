const fs         = require("fs");
const http       = require('http');

const express    = require('express');
// const bodyParser = require('body-parser'); // express post header parser
// const multiparty = require("multiparty"); // express multipart/form-data parser
const morgan     = require('morgan'); // express logger
// const cors       = require('cors'); // express Access-Control header adder
// const basicAuth = require('basic-auth-connect') // express oauth

// const socket_io  = require('socket.io');
// const peer       = require('peer');
const OAuth      = require('oauth');

// const {io_main}   = require("./io");
// const {peer_main} = require("./peer");
// const {api_router}= require("./router");
// const {flutter}   = require("./twi_oauth"); 
const app = express();
const server = http.Server(app);
// const io = socket_io(server)

// app.use(bodyParser.urlencoded({ extended: true })); // urlencoded body parser
// app.use(bodyParser.json()); // json body parser;
app.use(morgan("combined", { immediate: true })); // :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" 
// _basic = basicAuth(username, password);
// _cors = cors({origin: 'http://duxca.com'});
// app.options('*', _cors);

// io_main(io)

// app.use('/peerjs', peer.ExpressPeerServer(server, {debug: true}));
// peer_main(server)

// app.get('/twitter/connect', flutter.connect);
// app.get('/twitter/callback', flutter.auth);

app.use('/', express.static('htdocs'));
// app.use('/api', api_router);

server.listen(8080);


const OAuth2 = OAuth.OAuth2;
const {consumerKey, consumerSecret}= require("./key.json");    
const oauth2 = new OAuth2(
  consumerKey, consumerSecret, 
  'https://api.twitter.com/',  null,
  'oauth2/token', null);
oauth2.getOAuthAccessToken('', { 'grant_type': 'client_credentials' }, (e, access_token, refresh_token, results)=>{
  console.log('bearer: ',access_token);
});


//app.get "/", (req, res)->
//  res.redirect(301, '/demo' + req.path)


/*
app.post "/upload", (req, res)->
  form = new multiparty.Form()
  form.on 'error', (err)-> console.error('Error parsing form: ', err, err.stack)
  form.on 'part', (part)->
    part.on 'error', (err)-> console.error("Error part", err, err.stack)
    part.resume()
  #form.on 'close', ->
  form.parse req, (err, fields, files) ->
    if err? ||
       !fields.filename?[0]? ||
       !(files.file?[0]?.size > 0)
      console.error err, err?.stack, fields, files
      res.sendStatus(500)
      return
    console.info fields
    filename = fields.filename[0]
    oldPath = files.file[0].path
    newPath = __dirname + '/uploads/' + filename
    fs.rename oldPath, newPath, (err)->
      if (err)
        console.error err, err?.stack
    res.sendStatus(204)
*/

// res204 =  (fn)-> (req, res)-> setTimeout(-> fn(req, res)); res.sendStatus(204)