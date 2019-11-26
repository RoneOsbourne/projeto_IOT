var express = require('express');
var router = express.Router();
var actuadorsService = require('../../services/actuadorsService');

//bsd fnd

router.get('/', function(req, res, next) {

    var actuadors = actuadorsService.getActuadors();

    var data = {
        actuadors : actuadors
    };

    res.render('admin/actuadors/index', data);
});

router.get('/create', function (req, res, next){

    res.render('admin/actuadors/create');
});

router.post('/create', function (req, res, next){
    var actuadors = actuadorsService.getActuadors();
    

    var newId = actuadors.length + 1;

    var newActuador = {};
    newActuador.id = newId;
    newActuador.name = req.body.name;
    newActuador.status = 0;
    actuadorsService.saveActuador(newActuador);

    res.redirect('/admin/actuadors');
    
});

module.exports = router;
/*
    actuadorService.saveFileNewStatus(data);
    var actuadors = actuadorsService.getactuadors();
    res.render('', { title: "actuadors", actuadors }); /// (-_-)
});

//// inicio do comentário
/*
router.get('/:id', function(req, res, next) { // adicionei:id
    // var actuadorId = req.params.id; // adicionei essa variavel
    var actuadors = actuadorsService.getActuadors();

    var actuador = actuador.find((actuador) => actuador.id == actuadorId);

    req.json(actuador);
    // a partir daqui equivale ao devices do gb
    var data = {
        actuadors: actuadors
    };

    res.render('admin/dispositivs/actuador', data); /// ejs nome de origem admin/dispositivs/index
});

router.get('/create', function(req, res, next) {

    res.render('admin/dispositivs/create');
});

router.post('/create', upload.single('image'), function(req, res, next) {
    var actuadors = actuadorsService.getActuadors();

    var newId = actuadors.length + 1;

    var newActuador = {};
    newActuador.id = newId;
    newActuador.title = req.body.title;
    newActuador.image = req.file.filename;
    newActuador.description = req.body.description; /// possivelmente retirar depois
    newActuador.status = 0;
    newActuador.body = req.body.actuadorBody;

    actuadorsService.saveActuador(newActuador);

    res.redirect('/admin/actuadors');
}); 
*/
//fim do comentário

