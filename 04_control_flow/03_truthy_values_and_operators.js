// const userEmail = "sm@gmail.com"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

//truthy values

// "0", "false", " ", [], {}, function () { }

// falsy values

// false, 0, -0, BigInt: 0n, "", null, undefined, NaN

// const myArr = []

// if (userEmail.length === 0) {
//     console.log("Array is empty!");
// } else {
//     console.log("Array is not empty!");
// }

// const myObj = {}

// if (Object.keys(myObj).length === 0) {
//     console.log("Object is empty!");
// } else {
//     console.log("Object is not empty!");
// }

// console.log(false == 0)

// console.log(false == '');

// console.log(0 == '');

// Nullish Coalescing Operator (??):null/undefined

// let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 13
// val1 = null ?? 10 ?? 30

// console.log(val1);

// Terniary Operator

// syntax
// condition ? true : false

const iceCreamPrice = 500

iceCreamPrice <= 250 ? console.log("Less than 250!") : console.log("Greater than 250!")