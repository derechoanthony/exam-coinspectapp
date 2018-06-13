/* packages */
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express();
/* porst config */
var port = process.env.PORT || 8000,
    router = express.Router();
/* API's */
// var appRoute = require('./app/routes/api')(router),
//     appRoutevoters = require('./app/routes/votersapi')(router),
//     appRoute_TF = require('./app/routes/taskforceapi')(router),
//     appRoute_BCO = require('./app/routes/bcoapi')(router),
//     appRoute_print = require('./app/routes/print')(router),
//     appRoute_cluster = require('./app/routes/clusterapi')(router);
/* logger */
// var winston = require('./app/config/winston');

/*  middleware */
app.use(morgan('dev'));
// app.use(morgan('combined', {
//     stream: winston.stream
// }));
//logging by Anthony D.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));



app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function() {
    console.log("*running server on port " + port + "");
});