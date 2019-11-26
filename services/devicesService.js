var fs = require('fs');

var temperatureSensorsFilePath = 'db/sensors.json';
var actuadorsFilePath = 'db/actuadors.json';

var loadFileTemperatureSensors = function() {
  var fileData = fs.readFileSync(temperatureSensorsFilePath, 'utf8');
  var sensors = JSON.parse(fileData);

  return sensors;
}

var loadFileActuadors = function() {
    var fileData = fs.readFileSync(actuadorsFilePath, 'utf8');
    var actuadors = JSON.parse(fileData);

    return actuadors;
}

var saveFileActuadors = function(actuadors) {
    var data = JSON.stringify(actuadors);
    fs.writeFileSync(actuadorsFilePath, data, 'utf8');
}

var saveFileTemperatureSensors = function(sensors) {
    var data = JSON.stringify(sensors);
    fs.writeFileSync(temperatureSensorsFilePath, data, 'utf8');
}

var getSensors = function() {
    var sensors = loadFileTemperatureSensors();
    return sensors;
}

var getActuadors = function() {
    var actuadors = loadFileActuadors();
    return actuadors;
}

var addMeasurement = function(sensorId, temperature, humidity) {
    var sensors = loadFileTemperatureSensors();

    var selectedSensor = sensors.find((sensor) => sensor.id == sensorId);

    var measurementData = {
        "date": new Date().toLocaleString(),
        "temperature": temperature,
        "humidity": humidity,
    };

    selectedSensor.measurements.push(measurementData);

    saveFileTemperatureSensors(sensors);
    saveFileActuadors(actuadors);
}

module.exports = {
    getSensors: getSensors,
    getActuadors: getActuadors,
    addMeasurement: addMeasurement,
    saveFileActuadors: saveFileActuadors
}