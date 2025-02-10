const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// console.log(descriptor);

const newObj = {
    name: 'Ginger Chai',
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log("Chai Nahi bni!!!");

    }
}

console.log(newObj);
console.log(Object.getOwnPropertyDescriptor(newObj));
console.log(Object.getOwnPropertyDescriptor(newObj, 'name'));

Object.defineProperty(newObj, 'name', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(newObj,'name'));

for (const [key, value] of Object.entries(newObj)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}