var readline = require("readline-sync");
var questionNombre = readline.questionInt(
  "Le nombre que vous voulez divisez ? ",
);
var questionNbDivise = readline.question("Diviser par ? ");

if (divisible(questionNombre, questionNbDivise)) {
  console.log(
    "Le nombre " + questionNombre + " est divisible par " + questionNbDivise,
  );
} else {
  console.log(
    "Le nombre " +
      questionNombre +
      " n'est pas divisible par " +
      questionNbDivise +
      " car le reste est " +
      (questionNombre % questionNbDivise),
  );
}

ligne();

function divisible(nombre, nombreDivise) {
  /**
     * Ity mety 
     * Fa le raika eo amabany optimsé kokoa
    if (nombre % nombreDivise === 0) {
      return true;
    } else {
      return false;
    }
     */
  return nombre % nombreDivise === 0;
}

function ligne() {
  var tiret = "";
  for (i = 0; i < 50; i++) {
    tiret += ".";
  }
  console.log(tiret);
}
