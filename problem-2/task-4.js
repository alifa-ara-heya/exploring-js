/* You have an odd array (array with odd numbers): [1, 3, 5, 7, 9]. Now convert this array into an even array (array with even numbers): [2, 4, 6, 8, 10]. Do this using a for loop and array.map() method. Hint: add one to any odd number and it will become an even number. */

// using for lopp
const oddArray = [1, 3, 5, 7, 9];
const evenArray = [];
for (const number of oddArray){
    const evenNumber = number + 1;
    evenArray.push(evenNumber);
}
console.log(evenArray);


//using map method
const mapEvenArray = oddArray.map(number => number + 1);
console.log(mapEvenArray);