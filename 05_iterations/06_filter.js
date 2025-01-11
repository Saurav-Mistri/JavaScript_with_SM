// const coding = ["js", "ruby", "java", "pythong", "cpp"]

// const codingVal = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(codingVal);

// const myNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumArr.filter((num) => {
//     return num > 5;;
// })
// console.log(newNum);

// const newNumArr = []

// myNumArr.forEach((num) => {
//     if (num > 5) {
//         newNumArr.push(num);
//     }
// })

// console.log(newNumArr);

const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1971,
        edition: 2005
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: 2001,
        edition: 2001
    },
    {
        title: 'Book Four',
        genre: 'Fiction',
        publish: 2004,
        edition: 2005
    },
    {
        title: 'Book Five',
        genre: 'History',
        publish: 1983,
        edition: 1993
    },
    {
        title: 'Book Six',
        genre: 'Non-Fiction',
        publish: 1986,
        edition: 2001
    },
    {
        title: 'Book Seven',
        genre: 'Fiction',
        publish: 1982,
        edition: 2000
    },
    {
        title: 'Book Eight',
        genre: 'History',
        publish: 1984,
        edition: 1998
    },
    {
        title: 'Book Nine',
        genre: 'Non-Fiction',
        publish: 1993,
        edition: 1999
    },
    {
        title: 'Book Ten',
        genre: 'Fiction',
        publish: 1995,
        edition: 1987
    },
];

let userBooks;

// userBooks = books.filter((bk) => bk.genre == "History")

// userBooks = books.filter((bk) => { return bk.publish >= 2000; })

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre == "History" || bk.genre == "Fiction";
})
console.log(userBooks);
