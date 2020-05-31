function counter(){
      var _counter = 0;
    
      return{
      add: function(increment)
           {
             _counter+= increment;
           },
      retrieve: function()
          {
          return 'the counter is currently at: ' + _counter;
          }
     }
    }
    // _counter;
    
    var c= counter();
     c.add(5);
     c.add(15);
     c.add(20);
    
     c.retrieve();
     c.retrieve();



     var funcs = [];

     var foo = "foo";



// (function (innerFoo) {

//     // Outputs: "foo"

//     console.log(innerFoo);

// })(foo);



// var foo="foo";
// (function(innerfoo){
//    console.log(innerfoo);
// }) (foo);

// (function(){
//   var foo="hello";
//   console.log(foo);
// })();


// for (var i = 0; i < 3; i++) {

//   funcs[i] = function() {

//     console.log("i value is " + 3);

//   };

// }



// for (var i = 0; i < 3; i++) {

//   funcs[i]();

// }


// (function(){
//   var x=20,
//    y=20,
//    answer=x+y;
//    console.log(answer);
// })
// ();