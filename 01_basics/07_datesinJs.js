// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024, 11, 21, 5, 3)
// console.log(myCreatedDate1.toDateString());

let myCreatedDate2 = new Date("12-24-2024")
// console.log(myCreatedDate2.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
let myLongWeekday = newDate.toLocaleString('default', {
    Weekday: "long",
})

console.log(myLongWeekday);
