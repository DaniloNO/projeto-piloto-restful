var app = require('./app_config.js');
var activityController = require('./controller/activityController.js');

var validator = require('validator');
//
app.get('/', function (req, res) {
    res.end('Servidor ON!');
});
//
app.get('/activitys', function (req, res) {

    activityController.list(function(resp){
        res.json(resp)
    });
});
//
app.post('/activitys', function (req, res) {

    var name = validator.trim(validator.escape(req.param('name')));
    var title = validator.trim(validator.escape(req.param('title')));
    var body = validator.trim(validator.escape(req.param('body')));
    
    activityController.save(name, title, body,  function(resp){
        res.json(resp);
    });
});