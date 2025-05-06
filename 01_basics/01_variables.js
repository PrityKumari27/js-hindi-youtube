const accountId = 144553
let accountEmail = "prity@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = 2 // not allowed

accountEmail = "pk@pk.com"
accountPassword = "2121212121"
accountCity = "Bangaluru"

console.log(accountId);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])