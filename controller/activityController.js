var db = require('../db_config.js');

exports.list = function (callback){
    db.Activity.find({}, function(error, activitys){
        if (error){
            callback({error: 'Não foi possivel carregar as informações da tela!'});
        }else{
            callback(activitys);
        }
    });
};

exports.save = function (name, title, body, callback) {
    new db.Activity({
        'name': name,
        'title': title,
        'body': body,
    }).save(function (error, activity) {
        if (error) {
            callback({ error: 'Não foi possível salvar a nova tela!'});
        } else {
            callback(activity);
        }
    });
};