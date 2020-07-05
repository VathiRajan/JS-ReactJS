//spread Operator
//is used inside an array and inside an object
const number = [1, 2, 3]
const newNum = [...number, 4]
console.log(newNum)
const person = {
    name ="max"
}
const newPerson = {
    ...person,
    age: 14
}

console.log(newPerson)

//Rest Operator
//
const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1,2,3))