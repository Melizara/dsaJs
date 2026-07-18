/**
 * MAIN
 */
var readline = require("readline-sync");

var choix = -1;
while (choix !== 0) {
  ligne2();
  menu();
  ligne2();
  var choix = readline.questionInt("Quel est votre choix (1/2/0) ? ");
  if (choix === 1) {
    var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
    ligne();
    console.log(
      "Le factoriel du nombre " +
        nombre +
        " est egale à " +
        factorielle(nombre),
    );
  } else if (choix === 2) {
    var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
    ligne();
    console.log(
      "Le resulat de la somme des " +
        nombre +
        " premier nombre est egale à " +
        somme(nombre),
    );
  } else if (choix === 0) {
    ligne();
    console.log("A plus !");
  } else {
    ligne();
    console.log("Je n'ai pas compris, reesayez !");
  }
}
/**
 * Fonctions
 */
function factorielle(nombreFact) {
  var resultat = 1;
  for (var i = 1; i <= nombreFact; i++) {
    resultat = resultat * i;
  }
  return resultat;
}
function somme(nombreSomme) {
  var resultat = 0;
  for (var i = 0; i <= nombreSomme; i++) {
    resultat += i;
  }
  return resultat;
}
function ligne() {
  var tiret = "";
  for (var i = 0; i < 20; i++) {
    tiret += "*";
  }
  console.log(tiret);
}
function ligne2() {
  for (var j = 0; j < 2; j++) {
    ligne();
  }
}
function menu() {
  var message = "1/Factorielle \n";
  message += "2/Somme \n";
  message += "0/Quittez";
  console.log(message);
}
