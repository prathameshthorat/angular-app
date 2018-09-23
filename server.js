const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;


const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

  // Instruct the app
  // to use the forceSSL
  // middleware
  app.use(forceSSL());

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(PORT, function(){
  console.log('here '+PORT);
});

