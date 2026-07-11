var readline = require("readline-sync");
var chiffreEnMois = readline.questionInt(
  "Quelle mois de l'annee en lettres voulez-vous ?\n"
);

switch(chiffreEnMois){
    case 1 : console.log("Janvier");
    break;
    case 2 : console.log("Fevrier");
    break;
    default : console.log("NON");
}