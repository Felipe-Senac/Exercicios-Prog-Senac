var input = require('fs').readFileSync('./input.txt', 'utf8');
console.log(input)
var lines = input.split('\n');
console.log(lines)

var a = Number(lines[0])
var b = Number(lines[1])
var x = a + b
console.log(`X = ${x}`)