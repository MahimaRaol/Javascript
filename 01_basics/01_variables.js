// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically

// Using var

// Using let :- The let keyword was introduced in ES6 (2015)
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope

// Using const:-The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// Note
// The var keyword was used in all JavaScript code from 1995 to 2015.
// The let and const keywords were added to JavaScript in 2015.
// The var keyword should only be used in code written for older browsers.

/*
prefer not to use var beacause  of issue in block scope and functional scope
*/

const accountId = 122344
let accountEmail = "mahiraol@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2 //not allowed to redeclare
console.log(accountId);

accountEmail = "raj@gmail.com" //allow to redeclare=let
console.log(accountEmail);

accountPassword = "11111" //allow to redeclare=var
console.log(accountPassword);

accountCity = "Surat" //allow to redeclare
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

