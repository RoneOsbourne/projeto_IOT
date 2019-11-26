var express = require('express');
var router = express.Router();
var sensorsService = require('../../services/sensorsService');

router.get('/', function(req, res, next) {
    var sensors = sensorsService.getSensors();
    
        var data = {
            sensors: sensors
        };
         
    res.render('admin/sensors/index', data); // caminho para ejs  originalmente index/// possivel sensor
});

router.get('/create', function(req, res, next) {

    res.render('admin/sensors/create');
});

router.post('/create', function (req, res, next) {
    var sensors = sensorsService.getSensors();

    var newId = sensors.length + 1;

    var newSensor = {};
    var measurements = [];
    
    newSensor.id = newId;
    newSensor.title = req.body.title;
    newSensor.name = req.body.name;
    newSensor.measurements = [{
        "date": req.body.date,
        "temperature": req.body.temperature,
        "humidity": req.body.humidity}];
    
    sensorsService.saveSensor(newSensor);

    res.redirect('/admin/sensors');
});

module.exports = router;