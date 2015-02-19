var express = require('express')
var app = express()

console.log(process.argv[2]);

app.use(express.static(process.argv[2]));

var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
