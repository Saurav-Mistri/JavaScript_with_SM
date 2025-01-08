const user = {
    userName: "Mr SM",
    price: 302,

    welcomeMsg: function () {
        console.log(`${this.userName}, welcome to aboard!`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.userName = "Saurav"
// user.welcomeMsg()
// console.log(this);

function chai() {
    let userName = "Mr SM"
    console.log(this.userName);
}
// chai()

const chai1 = function () {
    let userName = "Mr SM"
    console.log(this.userName);
}
// chai1()

// Arrow function

const chai2 = () => {
    let userName = "Mr SM"
    console.log(this.userName);
}
// chai2()

// implicit function
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4, 5));

// explicit funtion
const addTwo1 = (num1, num2) => num1 + num2

console.log(addTwo1(2, 5))

// explicit funtion
const addTwo2 = (num1, num2) => (num1 + num2)

console.log(addTwo2(7, 5))

// explicit funtion
const returnObj = (num1, num2) => ({ userName: "Mr SM" })

console.log(returnObj(7, 5))