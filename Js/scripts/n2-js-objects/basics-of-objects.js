// https://javascript.info/object


//#
    //# "object constructor" syntax
        let user1 = new Object();

    //# "object literal" syntax
        let user2 = {}; 
//#

//#
    //# you can assign properties after declaring it
        user2 ={ 
            name : 'Arya'
            ,age : 19
            ,gender : 'male'
        }
        
    //# you can assign value right after decdeclaring it
        let article = {     // an object
            author: "Arad",  // by key "author" store value "Arad"
            titile: "How To Pass Math Exams" 
        };//A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
//# 

//# Accessing Object property values
    let user3 ={ 
        name : 'Arvin'
        ,age : 8
        ,gender : 'male'
    }

    // get property values of the object:
    alert( user3.name ); // Arvin
    alert( user3.age ); // 8
    //changing property values of the object
    user3.age = 9;
    //Deleting property values of the object
    delete user3.age;
///#

//# Multi Word Properties

    let user = {
        name: "Arash",
        age: 18,
        "likes birds": true  // multiword property name must be quoted
    };
    user["likes birds"] = true;


    //# Another Way Of using Multi Word Properties
        let key = "likes cats";
        user[key] = true;// same as user["likes cats"] = true;

//#

//#  Computed properties

    //#
    let fruit1 = "apple";
    let bag1 = {
    [fruit1]: 5, // the name of the property is taken from the variable fruit
    };

    //#
    let fruit2 = 'apple';
    let bag2 = {
        [fruit2 + 'Computers']: 5 // bag.appleComputers = 5
    };
//#


//# 
    function newUser1(name, age) {
        return {
        name: name,
        age: age,
        };
    }let user4 = newUser1("Aren", 9);
    alert(user4.name);

    function newUser2(name, age) {
        return {
          name, // same as name: name
          age,  // same as age: age
        };
    }let user5 = newUser2("Avin",11);
    alert(user5.name);

//#


//# "key" in object
    let user6 = { name: "Armita", age: 14 };
    alert( "age" in user ); // true, user.age exists
    alert( "blabla" in user ); // false, user.blabla doesn't exist
//#


//#  The “for…in” loop
    let user7 = {
        name: "Aryan",
        age: 23,
    };
    
    for (let key in user) {
    // keys
    alert( key );  // name, age
    // values for the keys
    alert( user[key] ); // Aryan, 23
    }
//#

//# Object.assign(dest, [src1, src2, src3...])

    let user = { name: "John" };

    let permissions1 = { canView: true };
    let permissions2 = { canEdit: true };

    // copies all properties from permissions1 and permissions2 into user
    Object.assign(user, permissions1, permissions2);

    // now user = { name: "John", canView: true, canEdit: true }

//#





//#
//#







//#
//#







//#
//#







