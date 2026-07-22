/**
 * MAIN
 */
var readline = require("readline-sync");
var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];
var personnage = [p1, p2, p3];

var question = "";
while (question !== 0) {
  console.log("****************************");
  menu();
  console.log("****************************");

  var question = readline.questionInt("Quel est votre choix ? ");
  switch (question) {
    case 1:
      afficherPersos(personnage);
      break;
    case 2:
      var moyenneAge = calculMoyenneAge(personnage);
      console.log("La moyenne d'age des personnages est de :" + moyenneAge);
      break;
    case 3:
      var p = ajoutPerso();
      personnage.push(p);
      console.log("Le personnage est ajouté avec succès");
      afficherPerso(p);
      break;
    case 4:
      if (personnage.length > 0) {
        afficherPerso(personnage[personnage.length - 1]);
        var saisie = "";
        while (saisie !== 1 && saisie !== 2) {
          saisie = readline.questionInt(
            "Voulez-vous vraiment supprimer ?(1.Oui;2.Non)",
          );
        }
        if (saisie === 1) {
          personnage.pop();
          console.log("Le personnage est supprimé avec succès");
        } else {
          console.log("Annulation");
        }
      } else {
        console.log("Le tableau est vide !");
      }
      break;
    case 5:
      var nomDmd = readline.question("Quel est le nom recherche ? ");
      var indice = recherchePerso(nomDmd, personnage);
      if (indice !== -1) {
        afficherPerso(personnage[indice]);
      } else {
        console.log("Le personnage " + nomDmd + " n'existe pas");
      }
      break;
    case 0:
      console.log("A plus");
      break;
    default:
      console.log("Choix non répertorié");
      break;
  }
}

/**
 * FUNCTION
 */
function menu() {
  var txt = "1/ Afficher les personnages \n";
  txt += "2/ Calcul de la moyenne d'age \n";
  txt += "3/ Ajouter un personnage \n";
  txt += "4/ Supprimer un personnage \n";
  txt += "5/ Afficher un personnage saisie au clavier \n";
  txt += "0/ Quittez";
  console.log(txt);
}

/**
 * Fonction qui permet d'afficher les personnages
 * @param {Array} tab tab : tableau des personnages
 */
function afficherPersos(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log("*************");
    afficherPerso(tab[i]);
  }
}
/**
 *Fonction qui permet d'afficher un seul
 * @param {Array} tab tab : tableau contenant une seul personnage
 */
function afficherPerso(tab) {
  console.log("Nom : " + tab[0]);
  console.log("Age : " + tab[1]);
  console.log("Sexe : " + (tab[2] ? "Homme" : "Femme"));
}

/**
 * Fonction permettant de calculer la moyenne d'age
 * @param {Array} tab tab : tableau des personnages
 * @returns {number} retourne la moyenne d'age
 */
function calculMoyenneAge(tab) {
  var moyenne = 0;
  for (var j = 0; j < tab.length; j++) {
    moyenne += tab[j][1];
  }
  return (moyenne /= tab.length);
}
/**
 * Fonction pour ajouter un personnage
 * @returns retourne un tableau contenant les infos du personnage ajoutée
 */
function ajoutPerso() {
  var perso = [];
  var nom = readline.question("Quel est le nom du personnage ? ");
  var age = readline.questionInt("Quel est l'age du perso ? ");
  perso.push(nom);
  perso.push(age);
  var sexe = 0;
  while (sexe !== 1 && sexe !== 2) {
    sexe = readline.questionInt("Quel est le sexe ?(1-Homme , 2-Femme)");
  }
  if (sexe === 1) {
    perso.push(true);
  } else {
    perso.push(false);
  }
  return perso;
}
/**
 * Fonction pour rechercher a l'aide d'un nom
 * @param {String} nom nom : le nom rechercher
 * @param {Array} tab tab : le tableau de personnage
 * @returns {Number} retourne l'indice du tableau ou -1
 */
function recherchePerso(nom, tab) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i][0].toLowerCase() === nom.toLowerCase()) {
      return i;
    }
  }
  return -1;
}
