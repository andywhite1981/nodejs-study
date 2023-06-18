const path = require('path');

const filePath = '/home/andrey/projects/Node/index.js';
const textFilePath = '/home/andrey/projects/file.txt';
const relativePath = './Node/movie.mov';
const directoryPath = './Node/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(textFilePath)); // file.txt
console.log(path.basename(relativePath)); // movie.mov
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // /home/andrey/projects/Node
console.log(path.dirname(directoryPath)); // ./Node

console.log(path.resolve(relativePath)); // /home/andrey/projects/Node/07-path/Node/movie.mov

console.log(path.extname(filePath)); // js
console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(relativePath)); // .mov
console.log(path.extname(directoryPath)); // '' (empty string)

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(filePath); // /home/andrey/projects/Node/index.js
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`)); // /home/andrey/projects/Node/renamed-index.mjs
