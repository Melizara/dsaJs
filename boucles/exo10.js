var readline = require("readline-sync");
var saisi = "";//Initialisation du variable
while (saisi !== 0) {//Tant que le nb saisi est pas 0, On boucle ça
  saisi = readline.questionInt("Veiller saisir un nombre entre 0 et 3 :");
  if (saisi === 1) {
    console.log("Bonjour");
  } else if (saisi === 2) {
    console.log("Salut");
  } else if (saisi === 3) {
    console.log("Coucou");
  } else if (saisi === 0) {
    console.log("Sorti");
  } else {
    console.log("Non prise en compte");
  }
}
