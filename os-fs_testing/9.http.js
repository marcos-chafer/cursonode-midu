const http = require('node:http');
const { findAvailablePort } = require('./10.free-port.js');

const server = http.createServer(function (req, res) {
	console.log('request received');
	console.log(req);
	res.end('Hola mundo' + res);
});

findAvailablePort(3000).then(function (port) {
	server.listen(port, function () {
		console.log('Server listening on port http://localhost:' + port);
	});
});
