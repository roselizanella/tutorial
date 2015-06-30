var http = require('http');

var server = http.createServer(function(resquest,response){
	response.writeHead(200)
	response.write('<h1>Hello form node js</h1>');
	response.end();
});

server.listen(8080);
console.log('Server runnig at 127.0.0.1:8080')
