var readline = require('readline-sync');

var age = 19;
var sportif = false;
var sexe = true;
var nb2 = readline.questionInt("Entrez un nombre (div2):");
var nb4 = readline.questionInt("Entrez un nombre (div4):");

console.log("La personne est " +((age >= 18) ? "Majeur" : "Mineur"));
console.log((sportif) ? "Bien" : "Devrait faire du sport");
console.log((sexe) ? "Masculin" : "feminin");
console.log((nb2 % 2 === 0) ? "Pair" : "Impair");
console.log((nb4 % 4 === 0) ? "Divisible par 4" : "Non divisible par 4");




