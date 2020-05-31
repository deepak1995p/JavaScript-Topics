function createBase(n){
    return function(m){
      return n+m;
    }
  }
  var addSix = createBase(6);
  addSix(10); // returns 16
  addsix(21); // returns 27