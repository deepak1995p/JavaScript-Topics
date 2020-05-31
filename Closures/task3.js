function greeting(message){
      return function(name){
        return message+ '' +name;
      }
    }
    // greeting('hi');
    var sayHi= greeting('hi ');
    // sayHi('hello');
    var sayHello = greeting('hello ');
    
    console.log(sayHi('Lakhan'));
    console.log(sayHello('Geeta'));
    