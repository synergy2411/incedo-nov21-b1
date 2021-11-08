"use strict";
// var x = "Some String";
exports.__esModule = true;
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
// - spread/ rest operator ( ... )`
// - Rest : Creates the collection from individual elements
// - Spread : Spreads the collection into individual variables
// function demo(email, ...args){
//     console.log(args[0])           // true
// }
// // demo("test@test.com")
// // demo("test@test.com", true)
// demo("test@test.com", true, 32)
// let arr = [3,4,5]
// let newArr = [1, 2, ...arr, 6,7,8];
// console.log(newArr);            // [1,2,[3,4,5],6,7,8]
// let userOne = {
//     firstName : "Foo"
// }
// let userTwo = {
//     ...userOne,
//     lastName : "Bam",
//     age : 32
// }
// let userThree = {
//     ...userTwo,
//     // firstName : "Baz",
//     age : 34
// }
// console.log(userTwo);           // {firstName : "Foo", lastName : "Bam"}
// console.log(userThree);           // ?
// const newUser = Object.assign({}, {firstName : "Foo"}, {lastName : "Bar"}, {age : 23})
// console.log(newUser)
// - Destructuring - Arrays / Objects
// let friends = ["Foo", "Bar", "Baz","Bam"]
// let [, , f3, ] = friends;
// console.log(friends[2]);
// friends[2] = "Something else"
// console.log(f3);            // ?
// console.log(friends);
// let draw = {
//     drawText : text => console.log("Drawing ", text),
//     drawRect : (w,l) => console.log(2 * w * l),
//     drawCircle : r => console.log(Math.PI * r * r)
// }
// let {drawCircle, drawRect, drawText} = draw;
// drawCircle(3);
// drawText("Sample text")
// let user = {
//     email  :"test@test.com",
//     age : 32,
//     friends : ["Foo", "Bar"],
//     address : {
//         city : "Bengaluru",
//         street : "201 Main road, Marathahali"
//     }
// }
// let {email, age, friends : [f1, f2], address : { city, street } } = user;
// console.log(f2, city, age);
// let [friend1, friend2, friend3] = ["Baz", ...user.friends]
// console.log(friend2, friend3);           // "Foo"
// let users = [
//     {email : "test1@test.com", age : 32},
//     {email : "test2@test.com", age : 34},
//     {email : "test3@test.com", age : 35},
// ]
// let [{email : e1, age: a1}, {email : e2, age : a2}, {email : e3, age : a3}] = users;
// console.log(e2, a3);
// - Default Parameters
// const defaultValue = "Some Value"
// const defaultParam = (state = defaultValue) => console.log(state)
// defaultParam("User defined value")
// - Promises : way to handle Async JavaScript behaviour
// - ensures success call
// - bind http request data
// - Async : timers, XHR Call, Reading/Writing, OS related tasks, Complex calculation etc
// Producer Code
// const delayFn = (arr, ms) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (arr.length < 2) {
//         // resolve({ message: "SUCCESS" });
//         resolve(new Promise((resolve, reject) => {
//             resolve({message : "SUCCESS"})
//         }))
//       } else {
//         reject(new Error("Too long wait..."));
//       }
//     }, ms);
//   });
//   return promise;
// };
// Consumer Code
// const callDelay = async () => {
//   console.log("Start");
//   try {
//     const result = await delayFn([1, 2], 3000);
//     const response = await result;
//     console.log(response);
//   } catch (err) {
//     console.log("ERROR");
//   }
//   console.log("End");
// };
// console.log("Program start");
// callDelay();
// console.log("Program end");
// Then callback hell
// const callDelay = () =>{
//     delayFn([1,2,3], 3000).then(response => {
//         // response.then().catch()
//     }).catch(err => console.log(err))
// }
// console.log("Start")
// callDelay()
// console.log("End");
// - Template literals -> " " | ' ' | ` ` 
// - Embed the variable within string without (+)
// - write multi line string without (\n)
// let username = "Foo";
// let age = 32;
// let str = `Hello from ${username},
// I'm ${age} years old!
// `
// console.log(str);
// - Classes
var student_1 = require("./student");
(function () {
    var foo = new student_1.Student("Foo", "Bam");
    console.log(foo.sayHello());
    console.log("My Lucky Number : ", student_1.LUCKY_NUMBER);
})();
// - Modules
// - Map/Set
