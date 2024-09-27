// map in objects 
const products = [
    { id: 1, name: 'lenovo', price: 22000 },
    { id: 2, name: 'mac', price: 12000 },
    { id: 3, name: 'samsung', price: 32000 },
];

const productName = products.map(p => p.name);
console.log(productName); //[ 'lenovo', 'mac', 'samsung' ]

const prices = products.map(p => p.price);
console.log(prices); //[ 22000, 12000, 32000 ]


//  for each

products.forEach(p => console.log(p.id)); // 1  2  3

//reduce
const totalPrice = products.reduce((accumulator, current) => accumulator + current.price, 0)
console.log(totalPrice); //66000


//filter
const expensive = products.filter(p => p.price > 20000);
console.log(expensive); /* //[
    { id: 1, name: 'lenovo', price: 22000 },
    { id: 3, name: 'samsung', price: 32000 }
  ] */


  //find
const firstAffordableProduct = products.find(p => p.price < 20000);
console.log(firstAffordableProduct); //{ id: 2, name: 'mac', price: 12000 }

