/**
 * Resaka concatenation amnle typage avec JS
 */
var phrase = "Bonjour";
phrase += " Melizara!\n";
phrase += "Forme ve ?";

console.log(phrase);

/**
 * Resaka conversion de variable
 */
var chiffre = 20;
var chiffreEnChaine = chiffre.toString();

console.log("La variable chiffre de type " + typeof(chiffre) + " a une valeur de : "+ chiffre);
console.log("La variable chiffreEnChaine de type " + typeof(chiffreEnChaine) + " a une valeur de : "+ chiffreEnChaine);

var dix = "10";
var dixEnChiffre = parseInt(dix);
console.log("La variable dix de type " + typeof(dix) + " a une valeur de : "+ dix);
console.log("La variable dixEnCHiffre de type " + typeof(dixEnChiffre) + " a une valeur de : "+ dixEnChiffre);