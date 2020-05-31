function add(a,b){
      console.log(a+b);
    }
      {
       function multiply(a,b){
          console.log(a*b);
        
        }
    }
      function callback(num1,num2,callback){
        callback(num1,num2);
      }
      
    
    callback(3,5,add);
    callback(5,8,multiply);