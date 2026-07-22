var p1 = {
  nom: "Toto",
  note1: 15,
  note2: 13,
  note3: 10,
};
var p2 = {
  nom: "Tito",
  note1: 12,
  note2: 17,
  note3: 16,
};
var p3 = {
  nom: "Tata",
  note1: 10,
  note2: 8,
  note3: 12,
};
var persos = [p1, p2, p3];

for (var i = 0; i < persos.length; i++) {
  var moyenne = calculMoyenne(persos[i]);
  console.log(
    "La moyenne de" +
      persos[i].nom +
      " est de " +
      Math.round(moyenne * 10) / 10,
  );
}

/**
 * 1-Function mi-calculer moyenne.
 * 2-Rehefa misy return ny fonction de tsy maintsy recuperena anatina variable ilay valeur return
 * 3-Eto zao mi-return "moyenne / nbNotes"
 * 4-Recuperena ambony eo am alalany "var moyenne = calculMoyenne(p3)" ohatra zay vao afaka affichena anaty console.log
 * 5-Eto perso 1 manana notes anaky 3 , donc ça implique mampiasa anle nbNotes izay isanle notes anatinle personnage
 * 6-Fa raha ohatra ka we "perso 1 manana note 1, perso 2 note1, perso 3 note1" ka ny moyenne ny note n'izy telo miaraka
 * De tsy mila nbNotes
 * @param {Object} perso perso: ilay personnage
 * @returns {Number} retourne la moyenne de notes du perso
 */
function calculMoyenne(perso) {
  var moyenne = 0;
  var nbNotes = 0;
  for (var information in perso) {
    if (typeof perso[information] === "number") {
      moyenne += perso[information];
      nbNotes++;
    }
  }
  return moyenne / nbNotes;
}
