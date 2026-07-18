console.log(ditBonjour("En") + "Melizara");
ligne();
console.log(ditBonjour("Fr") + "Goat");
ligne();
console.log(ditBonjour("Es") + "Messi");
ligne();

function ditBonjour(langue) {
  if (langue.toLowerCase() === "fr") {
    return "Bonjour ";
  } else if (langue.toLowerCase() === "en") {
    return "Hello ";
  } else if (langue.toLowerCase() === "es") {
    return "Hola ";
  } else {
    return "langue non paramétré";
  }
}

function ligne() {
  var tiret = "";
  for (i = 0; i < 20; i++) {
    tiret += ".";
  }
  console.log(tiret);
}
