var path = require('path')
var express = require('express')
var compression = require('compression')

var app = express()
app.use(compression())

var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', function(req, res) {
  res.sendfile('./dist/index.html')
})

app.listen(PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '❤️  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    )
  }
})
