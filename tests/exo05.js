var readline = require('readline-sync');

var moisEnChiffre = readline.questionInt("Quelle mois de l'annee voulez-vous ?");

if (moisEnChiffre === 1){
    console.log("janvier")
}else  if(moisEnChiffre === 2){
    console.log("fevrier")
}
/**
 * Ainsi de suite jusqu'à décembre
 * */