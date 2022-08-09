
var express = require('express');

var app = express();
app.use(express.static('static'));
app.use(require('./rutas'));
const port = 3000

  
  app.listen(port, () => {
    console.log(`Trello app listening on port ${port}`)
  })