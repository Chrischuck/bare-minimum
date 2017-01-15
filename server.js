/* eslint-disable */
var path = require('path');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function(req, res) {
    res.sendfile('./dist/index.html');
});

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
