function Person(first,last,age,gender,interests){
      this.name = {
        'first':first,
        'last':last
      };
      this.age= age;
      this.gender = gender;
      this.interests = interests;
    }
    let person1 = new Person('Bob','Smith', 32, 'male', ['music','skiing']);
    person1.Person();