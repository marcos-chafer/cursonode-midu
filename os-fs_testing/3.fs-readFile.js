const fs = require("node:fs");

console.log("Leyendo el primer achivo...")
fs.readFile("./archivo.txt","utf-8", function(err,text){
    console.log(text);

});


console.log('Hacer cosas mientras lee');

console.log("Leyendo el segundo achivo...")
fs.readFile("./archivo2.txt","utf-8", function(err,text){
    console.log(text);

});



