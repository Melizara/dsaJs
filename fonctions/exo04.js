var readline = require("readline-sync");
var questionNom = readline.question("Quel est votre nom ? ");
var questionLangue = readline.question("En quel langue(fr/en/es)? ");

ligne();
ditBonjour(questionNom, questionLangue);
ligne();

// ditBonjour("Melizara", "En");
// ditBonjour("Melizara", "Fr");
// ditBonjour("Melizara", "Es");

function ditBonjour(pseudo, langue) {
  if (langue.toLowerCase() === "fr") {
    console.log("Bonjour " + pseudo);
  } else if (langue.toLowerCase() === "en") {
    console.log("Hello " + pseudo);
  } else if (langue.toLowerCase() === "es") {
    console.log("Hola " + pseudo);
  } else {
    console.log("langue non paramétré");
  }
}

function ligne() {
  var tiret = "";
  for (i = 0; i < 20; i++) {
    tiret += ".";
  }
  console.log(tiret);
}
