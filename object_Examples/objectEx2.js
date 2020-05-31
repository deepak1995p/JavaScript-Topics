function pigeon(name, color, wings, span){
      this.name= name;
      this.color= color;
      this.wings = wings;
      this.span= span;
    }
    let pigeon1 =  new pigeon('Rocky', 'gray','two','15 years');
    let pigeon2 =  new pigeon('Ross','white','two', '15 years');
    
     console.log('the properties of pigeon' + pigeon1.name + 'is- color: ' + pigeon1.color + ','+ ' has wings: ' + pigeon1.wings +
     ', total lifespan: ' + pigeon1.span);