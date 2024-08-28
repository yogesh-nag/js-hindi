// primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const Id = Symbol('123')
const AnotherId = Symbol('123')

console.log(Id === AnotherId);

const bigNumber = 34567345678n
// reference(Non Primitive)

// Array, Object, Functions 

const heros = ["Ironman", "spiderman", "Antman"]
let myObj = {
    name: "Yogesh",    
    age: 19,

}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof(myObj))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "yogeshnag.com"

let anothername = myYoutubename
anothername = "nag.com"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "ynag7211@gmail.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email = "yogesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
