var readline = require("readline-sync");
var chiffreEnMois = readline.question(
  "Quelle mois de l'annee en lettres voulez vous ?\n"
);

if (chiffreEnMois === "janvier") {
  console.log("1");
} else if (chiffreEnMois === "fevrier") {
  console.log("2");
}
