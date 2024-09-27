//In JavaScript, map is a method used on arrays to create a new array by applying a function to each element of the original array. It doesn’t change the original array but instead returns a new one with the transformed elements.

const numbers = [4, 5, 2, 8];

function doubleIt(num) {
    console.log('num now', num);
    return num * 2;
}

const result = numbers.map(doubleIt);
console.log(result); /* num now 4
num now 5
num now 2
num now 8
[ 8, 10, 4, 16 ] */


// declaring the same function, but in a concise way
const double2 = n => n * 2;
const result2 = numbers.map(double2);
console.log(result2); //[ 8, 10, 4, 16 ]

// more easy way without using function, just using map
const makeDouble = numbers.map(n => n * 2);
console.log(makeDouble); //[ 8, 10, 4, 16 ]

const addFive = numbers.map(n => n + 5);
console.log(addFive);

const friends = ['Robin', 'Tom', 'Rebecca', 'Miller'];
const lengthOfFriends = friends.map(el => el.length);
console.log(lengthOfFriends); //[ 5, 3, 7, 6 ]

const firstCharacters = friends.map(friend => friend[0]);
console.log(firstCharacters); //[ 'R', 'T', 'R', 'M' ]


// map in objects 
const products = [
    {id: 1, name: 'lenovo', price:22000},
    {id: 2, name: 'mac', price: 12000},
    {id: 3, name: 'samsung', price: 32000},
];

const productName = products.map(p => p.name);
console.log(productName); //[ 'lenovo', 'mac', 'samsung' ]

const prices =  products.map(p => p.price);
console.log(prices); //[ 22000, 12000, 32000 ]
