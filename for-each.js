// a slight variation of map. Map returns the result as an array, but forEach doesn't return anything

const numbers = [1, 5, 8, 10];
const result = numbers.forEach(number => console.log(number)); //1  5   8  10
console.log(result); //1  5   8  10 undefined
// undefined because it doesn't return anything

//  in objects 
const products = [
    {id: 1, name: 'lenovo', price:22000},
    {id: 2, name: 'mac', price: 12000},
    {id: 3, name: 'samsung', price: 32000},
];

products.forEach(p => console.log(p.id)); // 1  2  3