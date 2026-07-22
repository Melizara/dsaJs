/**
 * Ity mety iany moa zany fa tsy mampiasa fonction ny blem
 * Code
var eleve1 = ["Toto", 4, 17];
var eleve2 = ["Titi", 11, 12];
var eleve3 = ["Tata", 12, 14];

var eleves = [eleve1, eleve2, eleve3];

for (var j = 0; j < eleves.length; j++) {
  var moyenne1 = (eleves[0][1] + eleves[0][2]) / j;
  var moyenne2 = (eleves[1][1] + eleves[1][2]) / j;
  var moyenne3 = (eleves[2][1] + eleves[2][2]) / j;
}
console.log("La moyenne de " + eleves[0][0] + " est de : " + moyenne1);
console.log("La moyenne de " + eleves[1][0] + " est de : " + moyenne2);
console.log("La moyenne de " + eleves[2][0] + " est de : " + moyenne3);
 */
/**
 * MAIN
 * Déclaration anle tableau multidimentionnel
 */
var eleves = [
  ["Toto", 4, 17],
  ["Titi", 11, 12],
  ["Tata", 12, 14],
];
/**
 * MAIN
 * Affichage du output
 * 1-Dans la boucle for, on parcours le tableau eleves
 * 2-On recuprère la valeur de la moyenne de l'élève (i)
 */
for (var i = 0; i < eleves.length; i++) {
  var moyenne = calculMoyenne(eleves[i]);
  console.log("La moyenne de " + eleves[i][0] + " est de : " + moyenne);
}
/**
 * FUNCTION
 * 1-Une fonction avec un SEUL paramètre 'tab'
 * 2-On initialise la valeur du 'moyenne' et le nombre de notes 'nbNotes'
 * 3-Le nbNotes eto ilay nombre 'entier' anatinle tableau eleves
 * 4-On va parcourir la tableau 'tab'
 * 5-On teste les types des variables du tableau 'tab' si elle sont tous de type number avec 'typeof'
 * 6-On fait la somme de tab[j] avec le moyenne et on incrémente le nbNotes de 1 en 1
 * 7-On divise la somme par le nbNotes et on return la valeur de moyenne
 */
function calculMoyenne(tab) {
  var moyenne = 0;
  var nbNotes = 0;
  for (j = 0; j < tab.length; j++) {
    if (typeof tab[j] === "number") {
      moyenne += tab[j];
      nbNotes++;
    }
  }
  moyenne /= nbNotes;
  return moyenne;
}
