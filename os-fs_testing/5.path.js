const path = require("node:path");

//Devuelve la barra separadora Linux = /, Win = \
console.log(path.sep);

// Unir rutas con path.join
const filePath = path.join("content","subfolder","test.txt");
console.log(filePath);

// Devuelve el nombre del fichero de una ruta, admite como segundo parametro la extension del fichero para quitarla
const base = path.basename(filePath);
console.log(base);

// Devuelve la extension
const extension = path.extname(base);
console.log(extension);