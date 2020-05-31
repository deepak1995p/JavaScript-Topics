// var arr=[1,5,7,5,9,10];

 function processSum(s,callback){
   var sum=0;
   for( var i=0;i<s.length;i++){

     sum += s[i];
   }
    callback(sum);
 }
 function result(res){
   console.log('the sum of the array is: ' +res);
 }

 processSum([1,5,7,5,9,10],result);