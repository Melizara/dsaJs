var readline = require("readline-sync");

var questionCapital = readline.question(
  "Combien voulez vous empruntez (en Ar)? ",
);
var questionTaux = readline.question(
  "Quel est le taux demande par votre banquier (en %) ? ",
);
var questionDuree = readline.question(
  "Quel est la duree de l'emprunt(en annee) ? ",
);

var vraiMens = mensualiteRemb(questionCapital, questionTaux, questionDuree);
console.log("............................")
console.log("Votre mensualité sera de " + vraiMens + " par mois ");

function mensualiteRemb(capital, taux, duree) {
  var i = taux /100/ 12;
  var n = duree * 12;
  var resultat = capital * (i / (1 - Math.pow(1 + i, -n)));
  return resultat;
}
