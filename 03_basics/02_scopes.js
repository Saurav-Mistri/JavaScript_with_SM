// var c = 300
let a = 200
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Local Scope:", a);
}
// console.log("Global Scope:", a);
// console.log(b);
// console.log(c);

function funOne() {
    const userName = "Mr SM"

    function funTwo() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    funTwo()
}

// funOne()

if (true) {
    const userName = "Saurav"
    if (userName === "Saurav") {
        const website = " JSInYouTube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

// ++++++++++++++++++  interesting  +++++++++++++++++++++++++++

console.log(addOne(4)) // this will call

function addOne(num1) {
    return num1 + 1;
}

addOne(4) // this will call

// addTwo(3) // returns an error
const addTwo = function (num2) {
    return num2 + 2;
}

addTwo(3) // this will call