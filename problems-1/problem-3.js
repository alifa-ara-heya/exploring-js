// write an arrow function where it will do the following:
//a) square each array element;
//b) Calculate the sum of the squared elements
//c) Return the average of the sum of the squared elements;

const avgOfSum = (arr) => {
    let sum = 0;
    for (let el of arr){
        el = el * el;
        sum = sum + el; 
    }
    const len = arr.length;
    const avg = sum / len;
    return avg;
}

const nums = [1, 2, 3, 4, 5];
console.log(avgOfSum(nums));