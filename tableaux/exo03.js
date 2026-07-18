var readline = require("readline-sync");

var tableau = [4, 8, 12, 16];
var saisie = readline.questionInt("Quel nombre voulez-vous? ");

var bool = verification(tableau, saisie);
if (bool) {
  console.log("Les valeurs du  tableau sont tous divisible par " + saisie);
} else {
  console.log(
    "Les valeurs du  tableau ne sont pas tous divisible par " + saisie,
  );
}

function verification(tab, diviseur) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] % diviseur !== 0) {
      return false;
    }
  }
  return true;
}
