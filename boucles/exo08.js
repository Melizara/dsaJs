var readline = require("readline-sync");
var nombre = "";

while (nombre < 1 || nombre > 5) {
  nombre = readline.questionInt(
    "Veuillez saisir un chiffre compris entre 1 et 5 :",
  );
}
console.log("Vous avez saisi " + nombre);
