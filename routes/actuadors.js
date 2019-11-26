var express = require('express');
var router = express.Router();
var devicesService = require('../services/devicesService');

router.get('/:id', function(req, res, next) {
  var actuadorId = req.params.id;

  var actuadors = devicesService.getActuadors();
  var actuador = actuadors.find((actuador) => actuador.id == actuadorId);

  res.json(actuador);
});

module.exports = router;
