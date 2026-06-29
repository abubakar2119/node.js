const marvel_heros=["ahmad","muhammad"]

const actor_heros=["zubair","usman"]

// marvel_heros.push(actor_heros)

// console.log(marvel_heros[2][1]);

// const allHeros=marvel_heros.concat(actor_heros)
// console.log(allHeros);

//spread operator

// const new_heros=[...marvel_heros,...actor_heros]
// console.log(new_heros);

// const another_Arr=[1,2,3,[4,6,],[5,7,[8,9,0]]]

// const real_Arr=another_Arr.flat(1)
// console.log(real_Arr);

console.log(Array.isArray("abubakar"));

console.log(Array.from("abubakar"));



// console.log(Array.from({name:"abubakar"}));intersting for asking interview

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
