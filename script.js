// Person class definition
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.great = function() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
};

// Employee class definition inheriting from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age);  // Call the parent class constructor
    this.jobTitle = jobTitle;
}

// Inherit methods from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.great = function() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
