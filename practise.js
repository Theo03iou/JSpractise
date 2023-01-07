const todos = [
    { 
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    { 
        id: 2,
        text: 'Walk milo',
        isCompleted: false

    },
    { 
        id: 3,
        text: 'Take out milo',
        isCompleted: true
    },
];
































// Class

class Person {
    constructor(firstName, lastName, age, dob) {
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age;
        this.dob = new Date(dob);
    }
    getBirthYear = function() {
        return this.dob.getFullYear();
    }

    getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// // Instantiate object
const person1 = new Person("Theo", "Georgiou", 19, '12/24/03')

console.log(person1.getFullName());
console.log(person1.getBirthYear())

console.log(person1)
console.log(person1.dob.getFullYear())



// Constructor function

// function Person(firstName, lastName, age, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName
//     this.age = age;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// // Instantiate object
// const person1 = new Person("Theo", "Georgiou", 19, '12/24/03')

// console.log(person1.getFullName());
// console.log(person1.getBirthYear())

// console.log(person1)
// console.log(person1.dob.getFullYear())





// => functions

// todos.forEach((todo) => console.log(todo));

// const addNums = (num1, num2) => num1 + num2;

// console.log(addNums(5,10));


// functions

// function addNums(num1, num2) {
//     return(num1 + num2);
// }

// console.log(addNums(5,2))







// switch

// const x = 10;

// const color = x > 10 ? 'red' : 'blue';

// switch (color) {
//     case 'red':
//         console.log("color is red")
//         break;
//     case 'blue':
//         console.log("color is blue")
//         break;
//     default:
//         console.log("color is not red or blue")
//         break;
// }




// turnary operator

// const x = 10;

// const color = x > 10 ? 'red' : 'blue';
// console.log(color)



 // filter - create a new array based on a condition

// const todoCompleted = todos.filter(function(todo) {  
//     return todo.isCompleted == true; //creates the new array of items where comp = true
// }).map(function(todo) {
//     return todo.text // Creates a new array of only the text where comp = true
// })
// console.log(todoCompleted);



// map - creates a new array from an array

// const todoText = todos.map(function(todo) {  
//     return todo.text
// });
// console.log(todoText);





// for each

// todos.forEach(function(todo) {  
//     console.log(todo.text);

// });


// for (let todo of todos) {
//     console.log(todo.text);
// }



// for (let i = 0; i < todos.length; i++) {
//     console.log(`Today's task: ${todos[i].text}`)
// }



// for

// for (let i = 0; i < 10; i++) {
//     console.log(`for loop ${i}`)
// }

// While

// let i = 0
// while (i < 10) {
//     console.log(`While loop number: ${i}`)
// }

// const array = [1,2,3,4,5,6,7,8,9,10];
// let i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++
// }

// for (let j = 11; j < 20; j++) {
//     console.log(j);
// }