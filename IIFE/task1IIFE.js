function display(){
    var number=0;
    function add(value){
      number+= value;
    }
    return{
      increase: function(){
        add(2);
      },
      decrease: function(){
        add(-2);
      },
      display: function(){
        return 'logs ' +number;
      }
    }
  }
  var calculate=display();
  // calculate.increase();
  
  
  console.log(calculate.display()); // logs 0
  
  calculate.increase();
  
  calculate.increase();
  
  calculate.increase();
  
  console.log(calculate.display()); // logs 6
  
  calculate.decrease();
  
  console.log(calculate.display());