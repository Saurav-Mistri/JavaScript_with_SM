const accountId = 241298
let accountEmail = "sauravmistri@gmail.com"
var accountPassword = "1234567890"
accountCity = "Ahmedabad"
let accountState;
// accountId = 2 // Not allowed

accountEmail = "saurav.mistri@kiwiqa.com"
accountPassword = "0987654321"
accountCity = "Ahm"

console.log(accountId);

/*
Prerfer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
