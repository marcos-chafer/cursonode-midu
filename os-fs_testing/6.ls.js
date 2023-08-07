const fs = require("node:fs");

fs.readdir(".",function(err,files){
    if (err) {
        console.error('Error al leer el directorio: '+err);
        return;
    }

    files.forEach(function(file){
        console.log(file);
    })
})