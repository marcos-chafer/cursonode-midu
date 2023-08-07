const net = require('node:net');

function findAvailablePort (desiredPort) {
	return new Promise(function (resolve, reject) {
		const server = net.createServer();

		server.listen(desiredPort, function () {
			const { port } = server.address();
			server.close(function () {
				resolve(port);
			});
		});

		server.on('error', function (err) {
			if (err.code === 'EADDRINUSE') {
				findAvailablePort(0).then(function (port) {
					resolve(port);
				});
			}
		});
	});
}

module.exports = { findAvailablePort };
