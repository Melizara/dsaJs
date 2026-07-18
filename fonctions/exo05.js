var readline = require('readline-sync');
var questionNombre = readline.questionInt("Le nombre que vous voulez divisez ? ");
var questionNbDivise= readline.question("Diviser par ? ");

divisible(questionNombre,questionNbDivise);
ligne();
divisible(50,2);
divisible(50,3);
divisible(50,4);
divisible(50,5);
function divisible(nombre, nombreDivise) {
  if (nombre % nombreDivise === 0) {
    console.log("Le nombre " + nombre + " est divisible par " + nombreDivise);
  } else {
    console.log(
      "Le nombre " +
        nombre +
        " n'est pas divisible par " +
        nombreDivise +
        " car le reste est " +
        (nombre % nombreDivise),
    );
  }
}

function ligne() {
  var tiret = "";
  for (i = 0; i < 50; i++) {
    tiret += ".";
  }
  console.log(tiret);
}