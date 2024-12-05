var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var tri = Number(lines[0]) * Number(lines[2]) /2;
var tra = Number(lines[0]) + Number(lines[1]) * Number(lines[2]) /2;
var qua = Number(lines[1]) ** 2;
var ret = Number(lines[0]) * Number(lines[1]);
var cir = Number(lines[2]) * 2 * 3.14159;
console.log(`TRIANGULO: ${tri.toFixed(3)}`);
console.log(`CIRCULO: ${cir.toFixed(3)}`);
console.log(`TRAPEZIO: ${tra.toFixed(3)}`);
console.log(`QUADRADO: ${qua.toFixed(3)}`);
console.log(`RETANGULO: ${ret.toFixed(3)}`);