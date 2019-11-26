var express = require('express');
var router = express.Router();
var actuadorsService = require('../services/actuadorsService');
var sensorsService = require('../services/sensorsService');
//var sobreService = require('../services/sobreService');
//var trabalheconoscoService = require('../services/trabalheconoscoService'); // trabalheconosco
//var cardsService = require('../services/cardsService');

/* GET home page. */ // nesse caso home e Smarthome
router.get('/', function(req, res, next) {
    var sensors = sensorsService.getSensors();
    var actuadors = actuadorsService.getActuadors(); //posts 
    
    res.render('index', { title: 'Home', actuadors: actuadors, sensors: sensors });
});

router.get('/actuadors', function(req, res, next) {
    var actuadors = actuadorsService.getActuadors();
    res.render('actuadors', { title: 'Atuadores', actuadors: actuadors });
});

/* não sofreu qualquer inflência ao (comentar) cancelar o codigo abaixo! */
router.get('/actuador/:actuadorId', function(req, res, next) {
    var actuadorId = req.params.actuadorId;
    var actuadors = actuadorsService.getActuadors(); //posts
    var actuador = actuadors.filter((actuador) => actuador.id == actuadorId)[0];

    res.render('actuador', { title: 'Atuador', actuador: actuador });
});

router.post('/create', function (req, res, next){
    var actuador = actuadorsService.getActuadors();
    
    var newActuador = {};
    newActuador.id = req.body.id;
    newActuador.status = req.body.status == 1 ? 0 : 1;
    actuadorsService.updateActuador(newActuador);
  
    res.redirect('/');
});

router.get('/sensors/:sensorId', function(req, res, next) {
    var sensorId = req.params.sensorId;
    var sensors = sensorsService.getSensors();
    var sensor = sensors.filter((sensor) => sensor.id == sensorId)[0];
    res.render('sensor', { title: 'Sensores', sensor: sensor });
  
  });
  
  router.get('/sensors', function(req, res, next) {
    var sensors = sensorsService.getSensors();
    res.render('sensor', { title: 'Sensors', sensor: sensors}); //res.render('all_sensors
  
  });

module.exports = router;