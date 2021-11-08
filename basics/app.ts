

// var x = "Some String";

// console.log(typeof x);      // string

// x = true;

// console.log(typeof x);      // boolean




// - Arrow function : Anonymous functions

//  (args) => body

// - With curly braces - write multiple lines in function body
// - Without curly braces - write one line function body; returned by arraow function
// - Can't be called with 'new' operators
// - don't have 'this' reference
// - don't have 'arguments' keyword
 

// ES5 Way
// var numbers = [1,2,3,4,5];

// var doubleValueArray = numbers.map(function(value){
//     return value * 2
// })

// console.log(doubleValueArray);          // [2,4,6,8,10]


// ES6 way

// var doubleValueArray = numbers.map( value => {
//     return value * 2
// } )
// console.log(doubleValueArray);

























// - let/const : Block scope variables

// function demo(arr){
//     if(arr.length > 2){
//         let LOADING = "LOADING..."
//         console.log(FLASH);             // undefined
//     }else{
//         let FLASH = "FLASHING..."
//     }
// }

// demo([1,2,3])

// const username = "Foo";

// username = "Bar";

// const user = {
//     name : "Foo"
// }

// user.name = "Bar";              // Mutable Change

// Immutable Change
// user = {
//     name : "Bam"
// }

// console.log(user.name);         // 'Bar'


// const fruits = ['apple', 'banana', 'oranges']

// fruits.push('kiwi')

// fruits[1] = 'anything'
// // fruits = ['']

// console.log(fruits);            // ?


// const user = Object.freeze({
//     name :"Foo"
// })

// user.name = "Bar";

















// - spread/ rest operator




















// - Destructuring - Arrays / Objects
// - Default Parameters
// - Promises
// - Template literals
// - Map/Set
// - Classes
// - Modules