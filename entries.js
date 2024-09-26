const person = {
    name: 'Alice',
    age: 25,
    occupation: 'Engineer'
  };
  
  const entries = Object.entries(person);
  console.log(entries);
  // Output: [['name', 'Alice'], ['age', 25], ['occupation', 'Engineer']]
  
  for (const [key, value] of Object.entries(person)){
    // console.log(key, value);
    console.log(`${key}: ${value}`); /* name: Alice
    age: 25
    occupation: Engineer */
  }

  