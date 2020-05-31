function Person(name,age,salary){
      this.name;
      this.age;
      this.salary;
      
    }
    console.log(Person.prototype);
    function Person(name, surname, dateOfBirth){
      this.name = name ;
      this.surname = surname ;
      this.dateOfBirth = dateOfBirth ;
    }
    Person.prototype.calculateAge= function(){
      console.log('the age of ' + this.name + ' ' + this.surname + ' is ' + (2020 - this.dateOfBirth));
    }
    console.log(Person.prototype);
    
    let person1 = new Person('Abhinav', 'Jamwal', 1997 );
    console.log(person1);
    
    let person2 = new Person('Gagan', 'Bhardwaj', 1998);
    console.log(person2);
    
    person1.calculateAge();
    person2.calculateAge();