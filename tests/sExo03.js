var readline = require('readline-sync');
var menu = "1-Ajouter \n";
menu +="2-modifier \n";
menu +="3-Supprimer \n";

console.log(menu);

var reponse = parseInt(readline.question("Veuillez saire votre choix ..."));
switch(reponse){
    case 1 : console.log("Vous avez selectionne l'ajout du joueur");
    break;
    case 2 : console.log("Vous avez selectionne la modification du joueur");
    break;
    case 3 : console.log("Vous avez selectionne la suppression du joueur");
    break;
    default : console.log("non");
}
