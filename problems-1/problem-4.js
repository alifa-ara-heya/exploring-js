// write an arrow function where it will do the following:
// a) it will take two arrow inputs;
//b) Combine the two arrays and assign them in a new array;
//c) Find the maximum number from the new array and return the result;

const maxNumber = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2];
    console.log(newArray);
    const maxNum = Math.max(...newArray);
    return maxNum;
}

const nums1 = [1, 2, 5, 7, 10];
const nums2 = [2, 4, 100, 20, 50];

console.log(maxNumber(nums1, nums2)); //100