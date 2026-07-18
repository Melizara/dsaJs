/**
 * Main
 */
tiret1();
bonjour();
tiret5();
coucou();
tiret5();
salut();
tiret1();

/**
 * Fonctions
 */
function tiret5() {
  //   var ligne = "";
  //   for (var i = 0; i < 50; i++) {
  //     ligne = ligne + "-";
  //   }
  for (var j = 0; j < 5; j++) {
    // console.log(ligne);
    tiret1();
  }
}
function tiret1() {
  var ligne1 = "";
  for (var i = 0; i < 50; i++) {
    ligne1 += "-";
  }
  console.log(ligne1);
}
function bonjour() {
  console.log("bonjour");
}
function coucou() {
  console.log("coucou");
}
function salut() {
  console.log("salut");
}
