// **** Singleton

// Object.create

// **** Object literals

const mySym = Symbol("Key1"); // new symbol

const jsObj = {
  name: "Mr SM",
  "full name": "Saurav Mistri",
  age: 27,
  location: "Ahmedabad",
  email: "mrsm@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Tuesday", "Wednesday"],
  [mySym]: "mySym1", // how to call/define the symbol in the object
  mySym: "mySym2", //this is not symbol, it's just a key value pair
};

// console.log(jsObj.email);  // do not prefer to use
// console.log(jsObj."full name"); // Not allowed
// console.log(jsObj["full name"]); // prefere to use
// console.log(jsObj[mySym]); // how to call the symbol

jsObj.email = "sauravmistri@gmail.com"; // overrite the value
// Object.freeze(jsObj); // freeze the object after we can't change the value
jsObj.email = "sauravmistri@outlook.com"; // doesn't overwrite the value
// console.log(jsObj);

jsObj.greeting = function () {
  console.log("Hello JS Object");
};
jsObj.greetingTwo = function () {
  console.log(`Hello JS Object, ${this.name}`);
};

console.log(jsObj.greeting());
console.log(jsObj.greetingTwo());
