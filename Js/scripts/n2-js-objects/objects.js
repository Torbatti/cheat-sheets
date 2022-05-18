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
//#


//#
//#


//#
//#
