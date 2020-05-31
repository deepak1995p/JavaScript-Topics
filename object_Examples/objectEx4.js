const animal= {
      name: ['cat', 'dog', 'deer'],
      cat: {
        eyes: 'brown',
        skin : 'fur',
        tail: 'dwarf',
        jump: '10 meter',
      },
      dog: {
        eyes: 'black',
        skin: 'small fur',
        tail: 'folded',
        jump: '5 meter',
    
        deer: {
          eyes: 'bright',
          skin: 'dotted balck yellow',
          tail: 'bush type',
          jump: 'long jump upto 10 meter',
        },
    
      },
       display1: function(){
         alert('the properties of animal ' + this.name[0] +' are:- eye color: ' + animal.cat.eyes + ','+ ' skin type: ' + this.cat.skin + ','+ ' tail: ' + this.cat.tail + ','+  ' and can jump: ' + this.cat.jump);
       },
       display2: function(){
         alert('the properties of animal ' + this.name[1] +' are:- eye color: ' + animal.dog.eyes + ','+ ' skin type: ' + this.dog.skin + ','+ ' tail: ' + this.dog.tail + ','+  ' and can jump: ' + this.dog.jump);
       }
    
    
    }
    animal.display1();
    animal.display2();
    animal.display3= function(){
      alert('the properties of animal ' + this.name[2] +' are:- eye color: ' + animal.dog.deer.eyes + ','+ ' skin type: ' + this.dog.deer.skin + ','+ ' tail: ' + animal.dog.deer.tail + ','+  ' and can jump: ' + animal.dog.deer.jump + ' and hunted by: ' +animal.dog.deer.hunted_by);
    } ;
    animal.display3();
    let myDataName='hunted_by';        //creating key name in deer named as hunted
    let myDataValue = 'lord Rama';
    animal['dog']['deer'][myDataName]= [myDataValue];
    console.log(animal.dog.deer.hunted_by);
    animal.display3();
    animal.lion={
      eye: 'nice',
      mouth: 'hairy',
      jump: '15 meter',
    }
    console.log(animal.lion.mouth);
    animal['lion']['mouth']= 'horror';
    console.log(animal.lion.mouth);
    animal.lion.mouth= 'awesome';
    console.log(animal.lion.mouth);
    