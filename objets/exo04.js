var readline = require("readline-sync");
var parcVoiture = require("./parc/gestionParcs");
var choix = -1;
while (choix !== 0) {
  menu();
  var choix = readline.questionInt("Quel est votre choix ? ");
  switch (choix) {
    case 1:
      parcVoiture.afficherParc();
      break;
    case 2:
      parcVoiture.afficherVoitures();
      break;
    case 3:
      parcVoiture.modifParc();
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
  var txt = "1/ Afficher le parc \n";
  txt += "2/ Afficher les voitures \n";
  txt += "3/ Modifier les information du parc \n";
  txt += "0/ Quittez";
  console.log(txt);
  console.log("*******************************");
}
