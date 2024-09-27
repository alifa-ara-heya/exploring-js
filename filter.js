// filter selects elements based on a condition and returns an array with the elements that fulfill the condition

const numbers = [1, 5, 8, 10, 3, 7, 12, 14];
const heights = [77, 55, 85, 100, 72, 52, 65, 63];
const selectedHeights = heights.filter(height => height > 70); //gives the height greater than 70
console.log(selectedHeights); //[ 77, 85, 100, 72 ]

const selectedHeights2 = heights.filter(height => height > 200);
console.log(selectedHeights2); //[], filter gives an empty array when it doesn't find any element which fulfills the condition, find gives undefined when doesn't find any element which fulfills the condition

// if we want to get the odd numbers
const odds = numbers.filter(number => number %2 !== 0);
console.log(odds); //[ 1, 5, 3, 7 ]

const friends = ['Robin', 'Tom', 'Rebecca', 'Miller', 'Rina'];
// find the friends with even number of characters
const evenFriends = friends.filter(friend => friend.length % 2 === 0);
console.log(evenFriends); //[ 'Miller', 'Rina' ]


//  in objects 
const products = [
    {id: 1, name: 'lenovo', price:15000},
    {id: 2, name: 'mac', price: 22000},
    {id: 3, name: 'samsung', price: 32000},
];

const expensive = products.filter(p => p.price > 20000);
console.log(expensive); /* //[
    { id: 2, name: 'mac', price: 22000 },
    { id: 3, name: 'samsung', price: 32000 }
  ] */