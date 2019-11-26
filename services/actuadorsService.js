var fs = require('fs');

var actuadorsFilePath = 'db/actuadors.json';
//ler status do atuador
var loadFileActuadors = function() {
    var fileData = fs.readFileSync(actuadorsFilePath, 'utf8');
    var actuadors = JSON.parse(fileData);

    return actuadors; 
}

var saveFileActuadors = function(actuadors) {
        var data = JSON.stringify(actuadors);
        fs.writeFileSync(actuadorsFilePath, data, 'utf-8');
    }
    //capurar status actuadors //fnd
var getActuadors = function() {
    var actuadors = loadFileActuadors();
    return actuadors;
}

var saveActuador = function(newActuador) {
    var actuadors = loadFileActuadors();
    actuadors.push(newActuador);
    saveFileActuadors (actuadors);
}

var updateActuador = function(actuadorParaAtualizar) {
    var allActuadors = loadFileActuadors();
    allActuadors.find(objeto => objeto.id == actuadorParaAtualizar.id).status = actuadorParaAtualizar.status
    saveFileActuadors(allActuadors);
}

module.exports = {
    getActuadors: getActuadors,
    saveActuador: saveActuador,
    updateActuador: updateActuador

}