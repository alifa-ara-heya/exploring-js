//object destructuring

const actor = {
    name: 'Ananta',
    age: 35,
    phone: '0197762668',
    money: 7616788283
}

console.log(actor.phone); //0197762668
// or,
const phoneOfActor = actor.phone;
console.log(phoneOfActor); //0197762668

// if right side is an object, left side of destructuring will also be object
const { phone } = actor; //use property name as variables that contain the property
console.log(phone); //0197762668

const { name, age } = actor;
console.log(name, age); //Ananta 35

// we can change the name of the property
const { money: taka } = actor;
console.log(taka); //7616788283

// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
console.log(first, second); //45 99
const [x, y] = [12, 66];
console.log(x, y); //12 66 

// we can also destructure a function with array
function doubleThem(a, b) {
    return [a * 2, b * 2]
}

const[a, b]=doubleThem(6, 9);
console.log(a, b); //12 18


// skipping ietms in an array
let [num1,,num3] = [12, 14, 16];
console.log(num1, num3); //12 16

// assign variables with a default value
let number1, number2, number3;
[number1 = 0, number2 = 5, number3 = 7] = [1, 2];
console.log(number1, number2, number3); //1 2 7


// swapping values of variables
let m = 1;
let n = 2;
[m, n] = [n, m];
console.log(m, n); //2 1