// https://javascript.info/constructor-new






//# Constructor function
    /*
    
    Constructor functions technically are regular functions. There are two conventions though:

        1. They are named with capital letter first.
        2. They should be executed only with "new" operator.
    */

    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }
        
    let user1 = new User("Jack");
    alert(user1.name); // Jack
    alert(user1.isAdmin); // false



    //# default values 
        function User(name) {
            // this = {};  (implicitly)
        
            // add properties to this
            this.name = name;
            this.isAdmin = false;
        
            // return this;  (implicitly)
        }

        
        let user2 = new User("Jack");
        let user3 = {
            name: "Jack",
            isAdmin: false
        };

        if (user2 == user3){ // user2 = user3
            alert("they are the same");//they are the same 
    }
//#










//#
//#










//#
//#





