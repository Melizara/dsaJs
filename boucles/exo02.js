var readline = require("readline-sync");
var nombreMult = readline.questionFloat(
  "Quel table de multiplication (reponse = 1 ou 24 ou 21.7) ? \n",
);

console.log(nombreMult);

for (var c = 10; c >= 1; c--) {
  console.log(c + "*" + nombreMult + "=" + c * nombreMult);
}
