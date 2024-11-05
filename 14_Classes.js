class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `My name is ${this.name} and i am ${this.age} years old`;
  }
  //adding methods to update name and age
  updateAge(age) {
    this.age = age;
  }
  updateName(name) {
    this.name = name;
  }
  //creating a static methos
  //Static methods belong to the class itself rather than to instances of the class.
  //no need to create instance of the class
  static generalMesg() {
    return "hello Sudhanshu";
  }

  //Add a getter method to  return the details
  //Getters in JavaScript classes allow you to define methods that are accessed like properties.
  get fullDetails() {
    return `${this.name} ${this.age}`;
  }

  //The setter method allows you to define custom logic for setting property values.
  //it takes only one parameter
  set setDetails(details) {
    const [name, age] = details.split(" ");
    this.name = name || "";
    this.age = age || "";
  }
}

let person = new Person(); //creating instance of class Person

person.updateAge(25);
person.updateName("Ankit");
console.log(person.name, person.age);
console.log(person.greet());

//Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance ofthe Student class and log the student ID.
class Student extends Person {
  //The Student class extends the Person class using extends, which allows it to inherit all properties and methods from Person.

  //Q-Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
  static numberOfStudents = 0;

  constructor(name, age, studentId) {
    super(name, age); //  to call the parent class (Person) constructor and initialize the inherited properties.
    this.studentId = studentId;

    Student.numberOfStudents++; //updating no of students whenever a newer instance of the Stuudent class is created
  }
  greet() {
    // // Override the greet method of person class
    return `${super.greet()} my student id is ${this.studentId}`;
  }
  getStudentId() {
    return `Id: ${this.studentId}`;
  }
}

const student = new Student("Sudhanshu", 25, "a46scs");
const student2 = new Student("Ankit", 25, "a55scs");

console.log(student.getStudentId());
console.log(student.greet());

// accessing static method no need to create instance of class
//Static methods are useful for operations that are related to the class itself, rather than to individual instances. This allows you to call methods on the class directly without needing to instantiate it.
console.log(Person.generalMesg());

console.log(Student.numberOfStudents);

//Getters in JavaScript classes allow you to define methods that are accessed like properties.
console.log(person.fullDetails);

//setting the name and age
person.setDetails = "Amit 25";
console.log(person.fullDetails);
