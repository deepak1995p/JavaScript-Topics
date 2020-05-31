var test=function(value,callback){
      if(value === true){
        callback(null,"given value is true");
      }
      else {
      callback(new Error("given value is false"));
    }
    }
     var callback=function(err,res){
       if(err){
         console.log(err); return;
       }
       console.log(res);
     }
     test(true,callback);
     test(false,callback);