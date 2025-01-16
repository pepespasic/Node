// Course link: https://www.youtube.com/watch?v=fBNz5xF-Kx4

const path = require('path')

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename)); 

// Create path object 
console.log(path.parse(__filename).base);

// Concantenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))