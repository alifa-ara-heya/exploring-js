// similar to filter, but gives the first element which fulfiils the condition
const heights = [77, 55, 85, 100, 72, 52, 65, 63];

const selectedHeights = heights.find(heights => heights > 60);
console.log(selectedHeights); //here, 77 is the first element which is greater than 60

const selectedHeights2 = heights.find(heights => heights > 110);
console.log(selectedHeights2); //find gives undefined when doesn't find any element which fulfills the condition, but filter gives an empty array when it doesn't find any element which fulfills the condition

//  in objects 
const products = [
    {id: 1, name: 'lenovo', price:15000},
    {id: 2, name: 'mac', price: 22000},
    {id: 3, name: 'samsung', price: 32000},
];

const firstAffordableProduct = products.find(p => p.price < 20000);
console.log(firstAffordableProduct); //{ id: 1, name: 'lenovo', price: 15000 }
