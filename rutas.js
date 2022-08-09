var Router = require('express');
const router  = Router();

//var tareas = require('./data.js');
router.use(Router.json())
router.use(Router.urlencoded({ extended: true }))

var tareas = require("./data.js");
let tar = new tareas();
router.get('/task', function(req, res) {
    estado = req.query.estado
    console.log(estado)
    res.send(tar.listartarea(estado));
  });

 router.post('/task', function(req, res) {
    console.log(req.body);
    tar.agregartarea(req.body);
    res.send(req.body);
  });  

  router.delete('/task', function(req, res) {
    res.send({"tarea1":""});
  });  

module.exports = router;
