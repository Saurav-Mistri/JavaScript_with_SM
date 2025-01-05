function sayMyName() {
    console.log("S");
    console.log("a");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("v");
}

// sayMyName()

// function additionTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function additionTwoNumbers(num1, num2) {
    // let res = num1 + num2
    // console.log("Saurav");  // this return 
    // return res;
    // console.log("Saurav"); // this will not return

    return num1 + num2;
}

const res = additionTwoNumbers(3, 6)
// console.log(res);

function loginUserMsg(userName = "Sam") {
    // if (userName === undefined) {
    if (!userName) {
        console.log("Please enter a username.");
        return;
    }
    return `${userName} just logged in`;
}

console.log(loginUserMsg()); // message with undefined
console.log(loginUserMsg("Mr Saurav"));