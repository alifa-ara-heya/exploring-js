// one way of declaring function
function add(a, b) {
    const result = a + b;
    return result;
}

// another way of declaring function
const multiply = function (a, b) {
    const result = a * b;
    return result;
    //or, return a * b;
}

console.log(multiply(2, 3));

// arrow function
const division = (a, b) => a / b;

console.log(division(6, 3));

// default parameter of function
const add2 = (num1 = 0, num2 = 0) => num1 + num2;

console.log(add2(1));

// no parenthesis used
const square = a => a * a;

console.log(square(4)); //16

// empty parenthesis
const myName = () => `My name is Heather`;
console.log(myName); //[Function: myName]
console.log(myName()); //My name is Heather

// more arrow functions

// arrow functions in object
const getAge = (person) => person.age; //implicit return
const student = {name: 'Robin', age: 22};
const ageOftheStudent = getAge(student);
console.log(ageOftheStudent);


// arrow functions in array
const getThird = numbers => numbers[2];
const nums = [12, 13, 14, 15, 16];
console.log(getThird(nums)); 

// more parameters
const getPi = () => Math.PI;

console.log(getPi());


// large arrow function
const doMath = (x,  y, z) => {
    const sum = x + z;
    const mult = x * y;
    const result = sum + mult;
    return result;
}

console.log(doMath(2, 3, 4)); //12