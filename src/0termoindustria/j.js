
let rest
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(res => res.json())
.then(res =>  console.log(res))

console.log("hola")
console.log(rest)