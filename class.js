//class declaration

// class Person{
//     constructor(first, last){
//     this.first = first
//     this.last = last
//     }
// }


// //class expression
// var Person = class Person{
//     constructor(first, last){
//         this.first = first
//         this.last = last
//         }
// }

//The body of a class is the part that is in curly brackets {}. This is where you define class members, such as methods or constructor.

//The constructor method is a special method for creating and initializing an object created with a class

//A constructor can use the super keyword to call the constructor of the super class.

//prototype

class Rectangle{
    constructor(height, width){
    this.height= height;
    this.width= width;
    }
    get Area(){ return this.height * this.width}
}


var ass = new Rectangle(10,10);
console.log(ass.Area);