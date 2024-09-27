const products = [
    { id: 1, name: 'lenovo', price: 22000 },
    { id: 2, name: 'mac', price: 12000 },
    { id: 3, name: 'samsung', price: 32000 },
    { id: 4, name: 'dell', price: 42000 },
];

// class name starts with capital letter
// within a class,we can declare functions and variables, but we will not use the keywords "function"/"let"/"const"
class Product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }

    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('le le lenovo');
console.log(lenovo); //Product { country: 'Bangladesh' , name: 'le le lenovo'}
lenovo.speak('Hi, ki koro') //talking about Hi, ki koro


class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir is teaching');
    }
}

const tapanSir = new Teacher('Tapan sir', 'physics');
console.log(tapanSir); //Teacher { name: 'Tapan sir', subject: 'physics' }