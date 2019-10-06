
var express 		= require('express');
var app 			= express();
var bodyParser 		= require('body-parser');
var methodOverride	= require('method-override');

var db 	= require('./config/db');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(bodyParser.json({
	type: 'application/vnd.api+json'
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'))
	.get('*',function (req,res) {
        res.sendfile(__dirname + '/public/views/index.html');
    });

require('./app/routes')(app);

app.listen(port);

console.log("Running on localhost:" + port);

exports = module.exports = app;
