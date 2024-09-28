/* 
The question in the image is:

**You have an array of objects:**

```javascript
const instructor = [
  {name: 'Nod', age: 28, position: 'Senior'},
  {name: 'Akil', age: 26, position: 'Junior'},
  {name: 'Shobuj', age: 30, position: 'Senior'}
];
```

**Your task is to display the instructor names that have the position 'Senior' using the `filter` method.** */

const instructor = [
    {name: 'Nod', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
  ];

const seniorPosition = instructor.filter(el => el.position === 'Senior');
console.log(seniorPosition); /* [
    { name: 'Nod', age: 28, position: 'Senior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
  ] */

const names = seniorPosition.map(el => el.name);
console.log(names); //[ 'Nod', 'Shobuj' ]