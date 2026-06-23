/**
 * Exercice 03
 * Resaka permutation variables, mampitsiry anle tmp
 */
var  prenom = "Santatra";
var nom = "MELIZARA";
console.log("****Avant correction****");
console.log("Prénom : ", prenom);
console.log("Nom : ", nom);
var tmp = prenom;//tmp=Santatra,prenom=Santatra, nom=MELIZARA
prenom = nom;//tmp=Santatra, prenom= MELIZARA, nom =MELIZARA
nom = tmp;//tmp=Santatra, nom=Santatra,prenom=MELIZARA
console.log("****Après correction****");
console.log("Prénom : ", prenom);
console.log("Nom : ", nom);

