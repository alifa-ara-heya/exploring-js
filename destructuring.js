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
const {phone} = actor; //use property name as variables that contain the property
console.log(phone); //0197762668
 
const {name, age} = actor;
console.log(name, age);

// we can change the name of the property
const {money: taka} = actor;
console.log(taka); //7616788283