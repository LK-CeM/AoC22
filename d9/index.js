var fs = require('fs');
const { get } = require('http');
var file = fs.readFileSync('./input', 'utf-8');
var transmission = file.split(/\r?\n/); 