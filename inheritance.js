class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na');
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(x, y, z);  //1 undefined 3

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output); //[ 1, 3, 5 ]

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b); //3
console.log(a, b); // 1  2