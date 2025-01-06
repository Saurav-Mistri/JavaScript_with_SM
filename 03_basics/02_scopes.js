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
