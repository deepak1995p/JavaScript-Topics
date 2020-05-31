function vehicle(name, maker){
    this.name = name;
    this.maker = maker;
  
  }
  let vehicle1 = new vehicle('Creta','Honda');
  let vehicle2 = new vehicle('Verna','Hyundai');
  
  console.log('name of the vehicle is: ' +'*' + vehicle1.name +'*' + ' and the maker of this car is: ' + '*' + vehicle1.maker +'*');
  
  console.log('name of the vehicle is: ' +'*' + vehicle2.name +'*' + ' and the maker of this car is: ' + '*' + vehicle2.maker +'*');