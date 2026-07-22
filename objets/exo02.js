var readline = require("readline-sync");
var persos = [];
var choix = -1;
while (choix !== 0) {
  menu();
  var choix = readline.questionInt("Quel est votre choix ? ");
  switch (choix) {
    case 1:
      for (var i = 0; i < persos.length; i++) {
        console.log("********************")
        afficherPerso(persos[i]);
      }
      break;
    case 2:
      var p = ajoutPerso();
      persos.push(p);
      console.log("Ajout avec succès ! ");
      break;
    case 0:
      console.log("A plus");
      break;
    default:
      console.log("Choix introuvable");
      break;
  }
}

function menu() {
  console.log("*******************************");
  var txt = "1/ Afficher les personnages \n";
  txt += "2/ Ajouter un personnage \n";
  txt += "0/ Quittez";
  console.log(txt);
  console.log("*******************************");
}

function ajoutPerso() {
  var perso = {
    nom: readline.question("Quel est le nom ? "),
    age: readline.question("Quel est l'age ? "),
  };
  return perso;
}

function afficherPerso(personnage) {
  for (var info in personnage) {
    console.log(info + " : " + personnage[info]);
  }
}
