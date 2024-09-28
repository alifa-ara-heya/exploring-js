/* The question in the image is:

**You have an array of objects:**

```javascript
const people = [
  { name: 'Meena', age: 20 },
  { name: 'Rina', age: 15 },
  { name: 'Suchorita', age: 22 }
];
```

1. **Follow the above array of objects. So, you have 3 objects as array elements. Can you find out the total sum of ages from here?**

   Calculation: 20 + 15 + 22 = 57. The output will be 57.

   What are you thinking? Yeah! Do it with a `for loop`. I know you can do it.

   **But! Wait! Wait!!! Do the same task using the `array.reduce()` method.** */

//using for loop
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];

let sum = 0;
for (const person of people) {
    sum = sum + person.age;
}
console.log(sum); //57



//using reduce method
const total = people.reduce((accumulator, current) => accumulator + current.age, 0);
console.log(total); //57