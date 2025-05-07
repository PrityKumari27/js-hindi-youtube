// Primitive 

// 7 Types: String, Number, Boolean, null, undefined, symbol, BigInt
const score = 100
const scoreVlaue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456736456356747633n

// Reference(Non Primitive)

// Array, Objects, Function

const heros = ["Saktimaan", "nagraj", "doga"];
let myObj = {
    name: "Prity",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreVlaue);
console.log(typeof myFunction);


// *************************************************************

// Two types of memory
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "pritykridotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "prity@google.com"

console.log(userOne.email);
console.log(userTwo.email);






