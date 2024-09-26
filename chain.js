// data access

const data1 = { id: 1, name: 'abul', address: 'kochukhet' }; //an object
console.log(data1.address); //kochukhet

const data2 = [{ id: 1, name: 'abul', address: 'kochukhet' }]; //an array of object

console.log(data2[0]); //{ id: 1, name: 'abul', address: 'kochukhet' }, an object

console.log(data2[0].address); //kochukhet


// find the price of the 2nd product
const products = {
    count: 1000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000 },
        { id: 2, name: 'macbook', price: 165000 },
    ]
}
console.log(products.data[1].price);


//access the second address of the user
const user = {
    id: 5001,
    name: 'Sakib Islam',
    address: {
        street: {
            first: '53, Kochukhet',
            second: 'poribag',
            third: 'noDorai'
        },
        city: 'Dhaka'
    }
}

console.log(user.address.street.second);

// what if we want to use this same code with user2, but user2 doesn't have second street.
const user2 = {
    id: 5002,
    name: 'Rakib Islam',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

// optional chaining
console.log(user2.address.street?.second);
