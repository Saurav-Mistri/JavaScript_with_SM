const myNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNumarr;
// newNumarr = myNumArr.map((num) => { return num + 10; })
// newNumarr.forEach(num => { console.log(num + 10) })

const newNumarr = myNumArr
    .map((num) => num * 10)
    .map((num2) => num2 + 2)
    .filter((num3) => num3 >= 60)

console.log(newNumarr);

