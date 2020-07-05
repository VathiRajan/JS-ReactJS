//ES5
class Human {
    constructor() {
        this.gender = "male";
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = "max";


    }
    printName() {
        console.log(this.name);
    }
}
//ES6
//remove constructor
class Human1 {

    gender = "male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person2 extends Human1 {

    name = "max";



    printName = () => {
        console.log(this.name);
    }
}
console.log("hello");
const person1 = new Person2();
person1.printName();
person1.printGender();