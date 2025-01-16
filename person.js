//Module Wrapper Function
// (function(exports, require, module, __filename, __dirname) {
// })

//console.log(__dirname, __filename);

class Person {
    constructor(name, age){
        this.name ='John Doe';
        this.age = 30;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
    

module.exports = Person; 