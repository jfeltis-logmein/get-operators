var express = require('express'),
		app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', 1337);

app.get('/', function(req, res){
	res.sendfile('public/index.html');
});

app.listen(app.get('port'), function(){
	console.log(`listening on ${app.get('port')}`);
});
