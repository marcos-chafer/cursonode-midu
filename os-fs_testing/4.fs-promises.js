const fs = require("node:fs/promises");

console.log("Leyendo el primer achivo...")
fs.readFile("./archivo.txt","utf-8")
    .then(function(text){
        console.log('Primer texto'+text);
    })


console.log('Hacer cosas mientras lee');

console.log("Leyendo el segundo achivo...")
fs.readFile("./archivo2.txt","utf-8").then(function(text){
    console.log('Segundo texto'+text);

})
