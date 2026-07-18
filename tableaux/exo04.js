/**
 * Main
 */
var readline = require("readline-sync");
var tableau = [4, 8, 12, 16];

var question = -1;
while (question !== 0) {
  ligne();
  menu();
  ligne();
  var question = readline.questionInt("Quel est votre choix ? ");
  switch (question) {
    case 1: //Appel fonction affichage
      affichage(tableau);
      break;
    case 2: //Appel fonction moyenne
      console.log("La moyenne est de " + moyenne(tableau));
      break;
    case 0:
      ligne();
      console.log("A plus");
      break;
    default:
      ligne();
      console.log("Cas non traité");
  }
}

/**
 * Fonctions
 */
function menu() {
  var txt = "1/Afficher le tableau \n";
  txt += "2/Calculer la moyenne \n";
  txt += "0/Sortir";
  console.log(txt);
}
function ligne() {
  var point = "";
  for (var i = 0; i < 20; i++) {
    point += ".";
  }
  console.log(point);
}
function affichage(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log(" Indice : " + i + " Valeur : " + tab[i]);
  }
}

function moyenne(tab) {
  var resultat = 0;
  for (var j = 0; j < tab.length; j++) {
    resultat += tab[j];
  }
  var moyenne = resultat / tab.length;
  return moyenne;
}
