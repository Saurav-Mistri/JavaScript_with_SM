const name = "Mr SM"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Saurav-SM')

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('v'));

const newStr = gameName.substring(0, 4)
// console.log(newStr);

const anotherStr = gameName.slice(-8, 4)
// console.log(anotherStr);

const newStrTrim = "  Saurav   "
// console.log(newStrTrim);
// console.log(newStrTrim.trim());

const url = "https://smshayries.blogspot.com/p%2032"
// console.log(url);
// console.log(url.replace('%20', '-'));
// console.log(url);
// console.log(url.includes('sm'));
// console.log(url.includes('SM'));
// console.log(url.includes('Saurav'));

const newStrSplit = new String("Saurav-Mr-SM")
console.log(newStrSplit.split('-'));
