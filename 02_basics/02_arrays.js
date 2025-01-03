const managementTeam = ["HR", "PrjectManager", "VicePresident"]

const operationTeam = ["Developer", "QA", "Designer", "TeamLeads"]

// managementTeam.push(operationTeam)

// console.log(managementTeam);
// console.log(managementTeam[3][3]);

const team = managementTeam.concat(operationTeam)
// console.log(team);

const allTeam = [...managementTeam, ...operationTeam]
// console.log(allTeam);

const nestedArray = [1, 2, 3, [2, 3, 4], 5, 6, 7, [8, 9, 0, [1, 2, 3, 4]]]

const flatArr = nestedArray.flat(Infinity)

// console.log(nestedArray);
// console.log(flatArr);

const str = "MrSM"
// console.log(str);
// console.log(Array.isArray(str));
// console.log(Array.from(str));

console.log(Array.from({ name: "MrSM" })); // returns a blank array

let scor1 = 123
let scor2 = 234
let scor3 = 345

console.log(Array.of(scor1, scor2, scor3));
