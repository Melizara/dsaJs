var readline = require("readline-sync");
var nombre = readline.questionInt("Quelle nombre voulez vous? :");
var factorielle = 1;
var compteur = 1;

while (compteur > factorielle) {
  factorielle = factorielle * compteur;
  compteur++;
  console.log(compteur + "ème passage - Résultat :" + factorielle);
}
