const glass =  {
    name: 'sonali',
    color: 'golden',
    isCleaned: true,
    price: 12,
}

console.log(glass);
const keys = Object.keys(glass);
console.log(keys); //[ 'name', 'color', 'isCleaned', 'price' ]

const values = Object.values(glass);
console.log(values); //[ 'sonali', 'golden', true, 12 ]


// array of array /two dimensional array
const pair = Object.entries(glass);
console.log(pair); /* [
    [ 'name', 'sonali' ],
    [ 'color', 'golden' ],
    [ 'isCleaned', true ],
    [ 'price', 12 ]
  ] */

//   deleting a property
  delete glass.isCleaned;
  console.log(glass); //{ name: 'sonali', color: 'golden', price: 12 }


//   another way to delete a property- destructuring
  const {price, ...shortGlass} = glass; //give me the properties of glass other than price
  console.log(shortGlass); //{ name: 'sonali', color: 'golden' }


// freezing an object

const student =  {
    name: 'monali',
    favColor: 'golden',
    isStudent: true,
    age: 12,
}

student.place = 'Bangladesh';
console.log(student); /* {
    name: 'monali',
    favColor: 'golden',
    isStudent: true,
    age: 12,
    place: 'Bangladesh'
  } */

Object.freeze(student);
student.isMarried = false;
console.log(student); /* {
    name: 'monali',
    favColor: 'golden',
    isStudent: true,
    age: 12,
    place: 'Bangladesh'
//   } */ //is married didn't get added

student.isStudent = false;
console.log(student); //the value of isStudent didn't change

// Object.seal lets you modify the property, but doesn't let you add or delete properties.