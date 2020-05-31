function Animal(walk, talk){
      this.walk = walk;
      this.talk = talk;
    
    } 
    Animal.prototype.lifeSpan = 20;
    
    Animal.prototype.type = "carnivorous";
    
    Animal.prototype.iWalk = function(){
      console.log('cat is walking like '+ this.walk + ' and lifespan of cat is '+ this.lifeSpan);
    }
    Animal.prototype.iTalk = function(){
      console.log('the cat talk like ' + this.talk);
    }
    
    
    
    let bigCat = new Animal('Lion', 'Roar');
    console.log(bigCat);
    
    let smallCat = new Animal('cat ','meow');
    console.log(smallCat);
    
    
    
    bigCat.iWalk();
    bigCat.iTalk();
    smallCat.iWalk();
    smallCat.iTalk();
    console.log('type of small cat is ' + smallCat.type );
    
    console.log('type of big cat is ' + bigCat.type);