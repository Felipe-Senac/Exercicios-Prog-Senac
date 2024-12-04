var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

var num1 = Number(lines[0])
var num2 = Number(lines[1])
var num3 = Number(lines[2])

console.log(num1, num2, num3)