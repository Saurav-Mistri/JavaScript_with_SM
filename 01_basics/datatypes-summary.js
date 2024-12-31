// Primitive

// 7 types : String, Number, boolean, null, undefined, BigInt 

const score = 100 // Number
const scoreValue = 100.3 // Number

const isLoggedIn = false // boolean 
const outSideTemp = null // null, not 0, not empty,
let userEmail; // undefined
let userEmail2 = undefined; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3453674859878435465965786n

// Reference (Non Primitive)

// Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"]; // Array

let myObj = {
    name: "Mr SM",
    age: 22,
}  // object

const myFunction = function(){
    console.log("Hello world!");
    }

// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);
// console.log(typeof bigNumber);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof userEmail);
// console.log(typeof userEmail2);
// console.log(typeof outSideTemp);
// console.log(typeof isLoggedIn);
// console.log(typeof score);
// console.log(typeof scoreValue);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myYouTubeName = "Studypoint"

let anotherName = myYouTubeName

anotherName = "chaiaurcode"

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "mrsm@gmail.com",
    upi: "mrsm@ybl"
}

let userTwo = userOne

userTwo.email = "sm@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
