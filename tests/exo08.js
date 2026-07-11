var readline = require('readline-sync');

var age = readline.questionInt("Quel age a le resident(ans) ?\n");
var taille = readline.questionInt("Quel est sa taille(cm) ?\n");
var residence = readline.question("Ou il reside ?\n");

if (age > 16 && taille > 160 && residence === "France"){
    console.log("Apte");
}else{
    console.log("Inapte");
}

