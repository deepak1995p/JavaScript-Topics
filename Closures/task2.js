// function counter(){
//   var counter = 0
//   return {
//     add: function(incr){ return counter+=incr}
//   }
  
// }
// var k = counter()
// k.add(5)
// k.add(8)
var promise = new Promise( function(resolve,reject){
  setTimeout(function(){
     var x = 100;
     var y = 15;
     if(x > y){
      resolve('x is greater than y');
     }
     else{
       reject('x is lesser than y');
     }
  },2000);
})
promise.then(function(){
  console.log('good job');
}).catch(function(){
  console.log('bad job');
});