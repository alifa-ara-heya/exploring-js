### 1. What is ES6? Have you ever used anything from ES6?

**Answer:**  
ES6 (ECMAScript 2015) is an updated version of JavaScript that includes new features to make coding easier and more powerful. Some of the new features are:

- `let` and `const` for better variable handling.
- Arrow functions for shorter and clearer syntax.
- Template literals for easier string formatting.
- Classes and modules for better organization of code.

**Example usage:**  
```javascript
// Using `let` to declare a variable inside a block
let x = 10;
if (true) {
  let x = 20; // different `x` inside this block
}

// Using arrow functions
const add = (a, b) => a + b;
```

---

### 2. Explain the difference between `var`, `let`, and `const`.

**Answer:**

- **`var`:**
  ```javascript
  var name = "John";
  var name = "Doe"; // You can redeclare and update
  console.log(name); // Output: Doe
  ```

- **`let`:**
  ```javascript
  let name = "John";
  name = "Doe"; // You can update
  // let name = "Jane"; // Error: can't redeclare in the same scope
  console.log(name); // Output: Doe
  ```

- **`const`:**
  ```javascript
  const name = "John";
  // name = "Doe"; // Error: can't reassign
  const person = { age: 25 };
  person.age = 30; // Allowed: modifying properties of objects
  console.log(person.age); // Output: 30
  ```

---

### 3. What is the arrow function, and how to create it?

**Answer:**  
Arrow functions are a new way to write functions in a shorter and cleaner form. They are especially good for simple tasks.

**Syntax:**
```javascript
const functionName = (parameters) => {
  // function body
};
```

**Example:**
```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice")); // Output: Hello, Alice!
```

---

### 4. Give an example of an arrow function in ES6. List down its advantages.

**Answer:**

**Example:**
```javascript
const multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // Output: 6
```

**Advantages:**
- Shorter and cleaner code.
- Does not change the `this` value, making it useful inside methods.
- Easier to read and write, especially for simple functions.

---

### 5. Discuss the spread operator in ES6 with an example.

**Answer:**  
The spread operator (`...`) allows you to spread out elements of an array or properties of an object.

**Example:**
```javascript
// Spreading elements of an array
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]

// Spreading properties of an object
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 30 };
console.log(updatedPerson); // Output: { name: "Alice", age: 30 }
```

---

### 6. What do you understand about default parameters?

**Answer:**  
Default parameters allow you to set a default value for a function parameter if no value is provided.

**Example:**
```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('John'); // Output: Hello, John!
```

---

### 7. What are template literals in ES6?

**Answer:**  
Template literals are a new way to handle strings that make it easier to include variables and expressions in strings. They use backticks (`` ` ``) instead of quotes.

**Example:**
```javascript
const name = 'Alice';
const greeting = `Hello, ${name}! How are you today?`;
console.log(greeting); // Output: Hello, Alice! How are you today?
```

---

### 8. Tell us the difference between arrow and regular functions.

**Answer:**

- **Arrow functions:**
  ```javascript
  const arrowFunc = () => {
    return this;
  };
  ```
  - Shorter syntax.
  - Do not have their own `this` value; they use the `this` from the surrounding code.

- **Regular functions:**
  ```javascript
  function regularFunc() {
    return this;
  }
  ```
  - Longer syntax.
  - Have their own `this` value, which can be different depending on how they are called.

---

### 9. Tell us the difference between `seal` and `freeze`.

**Answer:**

- **`Object.seal()`:**
  ```javascript
  const person = { name: 'Alice', age: 25 };
  Object.seal(person);
  person.age = 30; // Allowed
  person.gender = 'female'; // Not allowed
  console.log(person); // Output: { name: 'Alice', age: 30 }
  ```

- **`Object.freeze()`:**
  ```javascript
  const person = { name: 'Alice', age: 25 };
  Object.freeze(person);
  person.age = 30; // Not allowed
  person.gender = 'female'; // Not allowed
  console.log(person); // Output: { name: 'Alice', age: 25 }
  ```

---

### 10. Tell us the difference between `for...of` and `for...in`.

**Answer:**

- **`for...of`:**  
  Used to loop through the values of an iterable (like arrays).
  ```javascript
  const numbers = [1, 2, 3];
  for (let number of numbers) {
    console.log(number); // Output: 1, 2, 3
  }
  ```

- **`for...in`:**  
  Used to loop through the keys of an object or the index of an array.
  ```javascript
  const person = { name: 'Alice', age: 25 };
  for (let key in person) {
    console.log(key); // Output: name, age
  }
  ```