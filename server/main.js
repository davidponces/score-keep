import { Meteor } from "meteor/meteor";
import { Players } from "./../imports/api/players";

Meteor.startup(() => {
  // console.log(x);
  //Object Spread Operator
  // let user = {
  //   name: "David",
  //   location: "Portugal",
  //   age: 0
  // };
  // let person = {
  //   ...user,
  //   age: 25
  // };
  // //Object property shorthand
  // let bike = "Scott";
  // let stuff = {
  //   bike,
  //   latop: "MacBook Pro"
  // };
  // console.log(stuff);
  //challenge
  // let house = {
  //   bedrooms: 2,
  //   bathrooms: 1.5
  // };
  // let yearBuilt = 1995;
  // let myHouse = {
  //   ...house,
  //   yearBuilt,
  //   bedrooms: 3,
  //   flooring: "Carpet"
  // };
  // console.log(myHouse);
  // {
  //   bedrooms: 3,
  //     bathrooms: 1.5,
  //     yearBuilt: 1995,
  //     flooring: "carpet"
  // }
  // obj.printName();
  //   class Person {
  //     constructor(name = "Anonymous", age = 0) {
  //       this.name = name;
  //       this.age = age;
  //     }
  //     getGreeting() {
  //       return `Hi! I am ${this.name}.`;
  //     }
  //     getPersonDescription() {
  //       return `${this.name} is ${this.age} year(s) old.`;
  //     }
  //   }
  //   class Employee extends Person {
  //     constructor(name, age, title) {
  //       super(name, age);
  //       this.title = title;
  //     }
  //     getGreeting() {
  //       if (this.title) {
  //         return `Hi! I am ${this.name}. I work as a ${this.title}.`;
  //       } else {
  //         return super.getGreeting();
  //       }
  //     }
  //     hasJob() {
  //       return !!this.title;
  //     }
  //   }
  //   class Programmer extends Person {
  //     constructor(name, age, preferredLanguage = "assembly") {
  //       super(name, age);
  //       this.preferredLanguage = preferredLanguage;
  //     }
  //     getGreeting() {
  //       return `Hi! I am ${this.name}. I am a ${
  //         this.preferredLanguage
  //       } developer.`;
  //     }
  //   }
  //   let ashley = new Person();
  //   console.log(ashley.getGreeting());
  //   let me = new Programmer("David", 24);
  //   console.log(me.getGreeting());
  //   let jack = new Employee("Jack", 32, "Manager");
  //   console.log(jack.getGreeting());
  //   let me = new Employee("David", 24, "Sales Rep");
  //   console.log(me.getGreeting());
});
