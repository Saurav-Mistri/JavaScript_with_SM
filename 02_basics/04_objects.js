// singleton Object

// const tinderUser = new Object()   // singleton object
// console.log(tinderUser);

const tinderUser = {}  // non-singleton object
// console.log(tinderUser);

tinderUser.id = "A1"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "samregularuser@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Saurav",
            lastName: "Mistri"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "e", 6: "f" }

// const obj3 = { obj1, obj2 }
// console.log(obj3); // returns an nested object with obj1 and obj2

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2) // {} target obj1 and obj2 is a source
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "user1@gmail.com",
    }, {
        id: 2,
        email: "user2@gmail.com",
    }, {
        id: 3,
        email: "user3@gmail.com",
    }, {
        id: 4,
        email: "user4@gmail.com",
    },
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));