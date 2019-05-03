// The constructor property returns a reference to the Object constructor function that created the instance object

// All objects (with the exception of objects created with Object.create(null)) will have a constructor property.

var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true



function Tree(name) {
    this.name = name;
  }
  
  var theTree = new Tree('Redwood');
  console.log('theTree.constructor is ' + theTree.constructor);