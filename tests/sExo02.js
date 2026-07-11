var readline = require("readline-sync");

var age = readline.questionInt("Quel age avez vous ?");

//Utilisant switch
switch (age) {
  case 16:
  case 17:
    console.log("mineur");
    break;
  case 18:
  case 19:
  case 20:
    console.log("majeur");
    break;
  case 21:
  case 22:
  case 23:
  case 24:
    console.log("adulte");
    break;
  default:
    console.log("Non prise en compte .");
}
//utilisant If
if (age === 16 || age === 17) {
  console.log("mineur");
} else if (age > 17 && age < 21) {
  console.log("majeur");
} else if (age >= 21 && age <= 24) {
  console.log("adulte");
} else {
  console.log("Non prise en compte .");
}
