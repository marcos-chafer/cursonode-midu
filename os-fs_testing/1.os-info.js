const os = require('node:os');

console.log('Info OS: ');
console.log('----------------');
console.log('Nombre del OS: '+os.platform());
console.log(os.release());
console.log(os.arch());
console.log(os.cpus()); // Escalar procesos con node
