// const myNumArr = [1, 2, 3, 4]

// const initialVal = 0;

// const mySum = myNumArr.reduce(
//     function (accumulator, currentVal) {
//         console.log(`accumulator value: ${accumulator} and current value: ${currentVal}`);
//         return accumulator + currentVal;
//     },
//     initialVal);

// const mySum1 = myNumArr.reduce((accumulator, currentVal) => (accumulator + currentVal), 0)

// console.log(mySum1);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "PY Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    }
]

const cartTotal = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);

console.log(cartTotal);
