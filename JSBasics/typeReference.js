const num = 1;
num1 = num;

console.log(num1)

const person = {
    name: 'max'
}

person.name = "hello"
//reference is copied
sec = person
sec.name = "hello"
//in order to prevent copying refernce  , create new object and use spread operator
const person1 = {
    name: 'max'
}
const third = {
    ...person1
}

person.name = "copied"
console.log(fourth)



