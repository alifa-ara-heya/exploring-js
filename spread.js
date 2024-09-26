const nums2 = Math.max(11, 212, 21, 233, 50);
console.log(nums2); //233

const numbers = [12, 13, 14, 15, 16];
console.log(numbers); //[ 12, 13, 14, 15, 16 ]
const arraymax = Math.max(numbers);
console.log(arraymax); //NaN

console.log(...numbers); //12 13 14 15 16, it's not an array anymore
const arrayMaxReal = Math.max(...numbers)
console.log(arrayMaxReal); //16


// use spread operator to copy
const friends = [4, 5, 87, 9];
const bondhu = friends;
console.log(bondhu); //[4, 5, 87, 9]
console.log(friends); //[4, 5, 87, 9]
bondhu.push(10);
console.log(bondhu); //[ 4, 5, 87, 9, 10 ]
console.log(friends); //[ 4, 5, 87, 9, 10 ]

// if we don't want friends to add 10 too, we can use spread operators.
const sathi = [4, 5, 87, 9]
const dosto = [...sathi]; //copy
dosto.push(10);
console.log(dosto); //[ 4, 5, 87, 9, 10 ]
console.log(sathi); //[ 4, 5, 87, 9 ]

// advanced
const sonkha = [...sathi, 100];
console.log(sathi); //[ 4, 5, 87, 9 ]
console.log(sonkha); //[ 4, 5, 87, 9, 100 ]


let letters = [3, 4, 5];
let allLetters = [1, 2, ...letters, 6, 7]
console.log(allLetters); //[1,2,3,4,5,6,7]