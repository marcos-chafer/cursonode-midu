const fs = require('node:fs');
const path = require('node:path');
const pc = require('picocolors');

// Si no hay argumento en la tercera posición, el directoria será el actual
const folder = process.argv[2] || /* Si viene nulo el valor será... */ '.';

fs.readdir(folder, 'utf-8', function (err, files) {
	if (err) {
		console.error(pc.red('❌ No se pudo leer el directorio ' + err + ' ❌'));
		process.exit(1);
	}

	files.forEach(function (file) {
		const filePath = path.join(folder, file);
		fs.stat(filePath, function (err, stat) {
			if (err) {
				console.error(pc.red('No se pudo leer el fichero ' + err));
				process.exit(1);
			}

			const isDirectory = stat.isDirectory();
			let fileType;
			if (isDirectory) fileType = 'D';
			else fileType = 'F';
			const fileSize = stat.size.toString();
			const fileModified = stat.mtime.toLocaleString();

			const fileInfo = `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`;

			if (fileType == 'D') console.log(pc.blue('🗂️  ' + fileInfo));
			else if (fileType == 'F') console.log(pc.green('📗 ' + fileInfo));
		});
	});
});
