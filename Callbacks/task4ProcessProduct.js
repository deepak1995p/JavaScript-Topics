function processProduct(num1,num2,callback){
      product=num1*num2;
      callback(product);
    }
     function result(res){
       console.log('product of two numbers are: ' +res);
     }
     processProduct(4,5,result);
    
    var arr=['Gagan','Sunny','Abhinav','Deepak','Tejas'];
     function processContains(el,array,callback){
       if ( array.includes(el) ){
         callback (null, el+' is in our group');
       }
       else{
         callback (new Error ( el+ ' is not in our group'));
       }
      //  console.log(array.includes(el));
       
     }