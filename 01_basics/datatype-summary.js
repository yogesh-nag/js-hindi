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