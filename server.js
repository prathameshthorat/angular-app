const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;


/*const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['http://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }*/

app.use(bodyParser.urlencoded({
    extended: true
}));
// Run the app by serving the static files
// in the dist directory
app.use(express.static(path.join(__dirname + '/dist')));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

  // Instruct the app
  // to use the forceSSL
  // middleware
  //app.use(forceSSL());

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/env-vars', function(req, res, next){
  res.json( { 'fireBaseKey': process.env.FireBase_API_KEY,
              'fireBase_Auth_Domain': process.env.FireBase_Auth_Domain
});
  next();
})

// Start the app by listening on the default
// Heroku port
app.listen(PORT, function(){
  console.log('here '+PORT);
});
