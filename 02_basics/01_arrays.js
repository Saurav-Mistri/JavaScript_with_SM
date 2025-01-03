// Array

const myArray = [0, 1, 2, 3, 4, 5]

const myHeros = ["Shaktiman", "Iron-man", "Thor", "Locky"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArray);
// console.log(myArray[2]);
// console.log(myHeros);
// console.log(myArr2);

// Array methods

// myArr2.push(5)
// console.log(myArr2);
// myArr2.push(8)  // add element at last
// console.log(myArr2);
// myArr2.pop()   // remove last element
// console.log(myArr2);

// myArr2.unshift(8) // entered value will be added at first(0th index)
// console.log(myArr2);
// myArr2.shift()
// console.log(myArr2); // remove the first element

// console.log(myArr2.includes(8));
// console.log(myArr2.indexOf(4));

const myJoinArr = myArray.join()
// console.log(myArray);
// console.log(typeof myArray);
// console.log(myJoinArr);
// console.log(typeof myJoinArr);

// slice, splice

console.log("A ", myArr2);

const mySliceArr = myArr2.slice(2, 4) // returns a copy of specific range of elements from the existing array
console.log("B ", myArr2);
console.log(mySliceArr);

const mySpliceArr = myArr2.splice(2, 4) // returns a new specified array of defined range of elements from the existing array and manupulate the array
console.log("C ", myArr2);
console.log(mySliceArr);
