//for loops
// for(ini, con, ++/-- ){

// }
for (let i = 0; i < 5; i++){
   console.log(i)
}
// while() {
   
// }
let i = 0;
while (i < 5) {
   console.log(i);
   i++
};
// do (){
   
// }while()
let j = 0;

do {
   console.log(j);
   j++
   
} while (j < 5)
   

console.log("for of loop")
const fruits = ["apple", "lemon", "guyaba"];
for (const fruit of fruits) {
   console.log(fruit)
}
console.log("for in loop")
const person = {
   name: "abdul",
   age: 76,
   city: "dhaka"
   

}
for (const key in person) {
   console.log(`${key}: ${person[key]}`)
}