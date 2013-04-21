// var fs = require("fs");
// console.log("Starting");
// fs.readFile("../lesson-1/sample.txt", function(error, data) {
// 	console.log("Contents: " + data);
// });
// console.log("Carry on executing");

var fs = require("fs");
console.log("Starting");
var content = fs.readFileSync("../lesson-1/sample.txt");
console.log("Contents: " + content);
console.log("Carry on executing");