/* You are given an array: [33, 50, 79, 78, 90, 101, 30]. Now return/get all the elements which are divisible by 10 using the array.filter() method.

Now do the same task as question 2, but do this using the array.find() method. Then compare the output of question 2 and question 3. */

const givenArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 =  givenArray.filter(num => num % 10 === 0);
console.log(divisibleBy10); //[ 50, 90, 30 ]

const findDivisibleBy10 = givenArray.find(num => num % 10 === 0);
console.log(findDivisibleBy10); //50

// filter method gives us an array of elements which fulfills the condition in an array, but find method gives us the first element which fulfills the condition.