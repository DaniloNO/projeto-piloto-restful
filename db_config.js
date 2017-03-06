var database = 'mongodb://127.0.0.1/projeto_piloto';
var mongoose = require('mongoose').connect(database);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão ao banco de dados!'));
db.once('open', function(){
    var activitySchema = mongoose.Schema({
        name: String,
        title: String,
        body: String
    });
    exports.Activity = mongoose.model('Activity', activitySchema)
});