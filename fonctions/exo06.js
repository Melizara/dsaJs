/**
 * Ity eto ity procédure satria tsy mi-return in in
 */

var readline = require("readline-sync");
var nb1 = readline.questionInt("Inserez la premiere nombre : ");
var nb2 = readline.questionInt("Inserez la deuxieme nombre : ");
var nb3 = readline.questionInt("Inserez la troisieme nombre : ");
var nb4 = readline.questionInt("Inserez la quatrieme nombre : ");
moyenne(nb1, nb2, nb3, nb4);

function moyenne(nombre1, nombre2, nombre3, nombre4) {
  var resulat = (nombre1 + nombre2 + nombre3 + nombre4) / 4;
  console.log("La moyenne est de " + resulat);
}
