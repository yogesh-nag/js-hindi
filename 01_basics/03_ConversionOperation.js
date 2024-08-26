let age = "33"

console.log(typeof age);
console.log(typeof(age));

let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NAN
// true => 1; false => 0

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false;
// "yogesh" => true

let someNumber = 32

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof(StringNumber))