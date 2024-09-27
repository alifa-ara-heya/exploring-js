const numbers = [1, 5, 8, 10];
const total = numbers.reduce((previous, current) => previous + current, 0); //here, we can also call the previous as accumulator. 0 is the fallback value here, as we are adding, we used 0, if we multiplied, we would use 1. map, find, filter take 1 parameter, but reduce takes 2 parameters
console.log(total); //24

//  in objects 
const products = [
    {id: 1, name: 'lenovo', price:15000},
    {id: 2, name: 'mac', price: 22000},
    {id: 3, name: 'samsung', price: 32000},
];

const totalPrice = products.reduce((accumulator, current) => accumulator + current.price, 0)
console.log(totalPrice); //69000