/**
 * Fonction zao ity satria mi-return zavatra
 * Ny dikanle return dia miala tanteraka anatinle fonction de mandeh any am main
 */
var readline = require("readline-sync");
var nb1 = readline.questionInt("Inserez la premiere nombre : ");
var nb2 = readline.questionInt("Inserez la deuxieme nombre : ");
var nb3 = readline.questionInt("Inserez la troisieme nombre : ");
var nb4 = readline.questionInt("Inserez la quatrieme nombre : ");
var m1 = moyenne(nb1, nb2, nb3, nb4);
console.log("La moyenne est de " + m1);

function moyenne(nombre1, nombre2, nombre3, nombre4) {
  return (nombre1 + nombre2 + nombre3 + nombre4) / 4;
}
