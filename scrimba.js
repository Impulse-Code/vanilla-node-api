// PATH MODULE WALKTHROUGH
// const path = require("path");

// Gets the base file name
// console.log(path.basename(__filename));

// Gets the directory name
// console.log(path.dirname(__filename));

// create path obj
// console.log(path.parse(__filename));

// FS MODULE WALKTHROUGH
// const fs = require("fs");
// create a folder
// fs.mkdir(path.join(__dirname, "test"), {}, function (err) {
// 	if (err) throw err;
// 	console.log("folder created successfully");
// });

// create and write file
// fs.writeFile(
// 	path.join(__dirname, "/test", "hello.txt"),
// 	"Hello world",
// 	function (err) {
// 		if (err) throw err;
// 		console.log("file written to successfully...");
// 		fs.appendFile(
// 			path.join(__dirname, "/test", "hello.txt"),
// 			" I love node.js",
// 			function (err) {
// 				if (err) throw err;
// 				console.log("file written to successfully...");
// 			}
// 		);
// 	}
// );

// read file
// fs.readFile(
// 	path.join(__dirname, "/test", "hello.txt"),
// 	"utf8",
// 	function (err, data) {
// 		if (err) throw err;
// 		console.log(data);
// 	}
// );

// OS MODULE WALKTHROUGH
const os = require("os");
// Gives us information about our operating system and environment

console.log(os.platform());
// CPU architecture
// console.log(os.arch());
// CPu core information
console.log(os.cpus());
// HOme dir
// console.log(os.homedir());

// URL MODULE WALKTHROUGH
