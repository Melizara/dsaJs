var readline = require("readline-sync");

var age = readline.questionInt("La personne a quel age ? \n");
var sexe = readline.question("La personne est de sexe ? \n");
var ville = readline.question("La personne  habite ? \n");
/**
 * Supposons que personne agée est superieur à 60
 * Et personne adulte est agée entre 18 à 60
 */

if (
  age >= 60 &&
  (sexe === "masculin" || sexe === "Masculin") &&
  ville === "Toulouse"
) {
  console.log("Personne agée de Toulouse de sexe masculin");
} else if (
  age >= 60 &&
  (sexe === "feminin" || sexe === "feminin") &&
  (ville === "Toulouse" || ville === "toulouse")
) {
  console.log("Personne agée de Toulouse de sexe feminin");
}

if (
  age < 60 &&
  age > 18 &&
  (sexe === "masculin" || sexe === "Masculin") &&
  (ville === "Paris" ||
    ville === "Marseille" ||
    ville === "paris" ||
    ville === "parseille")
) {
  console.log("Personne adulte de Paris ou Marseille de sexe masculin");
} else if (
  age < 60 &&
  age > 18 &&
  (sexe === "feminin" || sexe === "Feminin") &&
  (ville === "Paris" ||
    ville === "Marseille" ||
    ville === "paris" ||
    ville === "parseille")
) {
  console.log("Personne adulte de Paris ou Marseille de sexe masculin");
}
