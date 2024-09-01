const name = "yogesh"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`hello My name is ${name}and my repoCount is ${repoCount}`);  // String Interopolation

const gameName = new String('yogesh')

console.log(gameName[4]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 4);
console.log(anotherString);

const newStringone = "  yogeshnag  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://yogesh.com/yogesh%30nag"
console.log(url.replace('%30','-'));
console.log(url.includes('nag'));
console.log(gameName.split('-'));
console.log(gameName.lastIndexOf());

