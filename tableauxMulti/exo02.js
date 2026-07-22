var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];
var personnage = [p1, p2, p3];

afficherPerso(personnage);
ligne();

function afficherPerso(perso) {
  for (var i = 0; i < perso.length; i++) {
    ligne();
    console.log("Perso " + i + " :");
    console.log("Nom : " + perso[i][0]);
    console.log("Age : " + perso[i][1]);
    console.log("Sexe : " + (perso[i][2] ? "Homme" : "Femme"));
  }
}
function ligne() {
  var asterix = "";
  for (var i = 0; i < 15; i++) {
    asterix += "*";
  }
  console.log(asterix);
}
