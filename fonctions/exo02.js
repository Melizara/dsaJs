/**
 * Main
 */
var nom = "melizara";
tiret();
bonjour(nom);
tiret2();
hello(nom);
tiret2();
hola(nom);

function tiret() {
  var ligne = "";
  for (var i = 0; i < 20; i++) {
    ligne += "-";
  }
  console.log(ligne);
}
function tiret2() {
  for (var j = 0; j < 2; j++) {
    tiret();
  }
}
function bonjour(nomDuPersonne) {
  console.log("Bonjour " + nomDuPersonne);
}
function hello(nomDuPersonne) {
  console.log("Hello " + nomDuPersonne);
}
function hola(nomDuPersonne) {
  console.log("hola " + nomDuPersonne);
}
