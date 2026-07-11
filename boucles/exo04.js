//factorielle
var readline = require("readline-sync");

var nbFact = readline.questionInt("Vous voulez la factorielle de ? ");
var resultat = 1;
for (var i = 1; i <= nbFact; i++) {
  resultat = resultat * i;
  if (i === 1) {
    console.log(i + "er passage + total = " + resultat);
  } else {
    console.log(i + "ème passage + total = " + resultat);
  }
}
