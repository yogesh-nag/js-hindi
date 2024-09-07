const marvel_heroes = ["Thor","ironman","SpiderMan"]
const DC_heroes = ["Superman","flash","batman"]

// marvel_heroes.push(DC_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const Allheroes = marvel_heroes.concat(DC_heroes);
// console.log(Allheroes);

// const All_new_heroes = [...marvel_heroes,...DC_heroes]
// console.log(All_new_heroes);

// const another_Array = [1, 2, 3,[4, 5, 6], 7,[6, 7,[4, 5]]]
// const real_Another_Array = another_Array.flat(Infinity)
// console.log(real_Another_Array
console.log(Array.isArray("Yogesh"));
console.log(Array.from("Yogesh"));
console.log(Array.from({name: "Yogesh"})) // intresting case

let Score1 = 100
let Score2 = 200
let Score3 = 300
console.log(Array.of(Score1,Score2,Score3));