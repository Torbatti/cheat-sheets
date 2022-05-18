// https://javascript.info/object-methods

//#
let user1 = {
    name: "John",
    age: 30
  };
  
  user1.sayHi = function() {
    alert("Hello!");
  };
  
  user1.sayHi(); // Hello!
//#

//#
    // method
    user2 = {
        sayHi: function() {
        alert("Hello");
        }
    };
    
    // method shorthand 
    user3 = {
        sayHi() { // same as "sayHi: function(){...}"
        alert("Hello");
        }
    };
//#

//# “this” in methods

    let user4 = {
        name: "John",
        age: 30,
    
        sayHi() {
        // "this" is the "current object"
        alert(this.name);
        }
    
    };
    
    user4.sayHi(); // John
//#







//#
//#







//#
//#







//#
//#







//#
//#







//#
//#







//#
//#










