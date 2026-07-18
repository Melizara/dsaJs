var tabNotes = [5, 12, 18, 13, 14, 10, 7];
var resultat = 0;
for (var i = 0; i < tabNotes.length; i++) {
  resultat += tabNotes[i];
}
var moyenne = resultat / tabNotes.length;
console.log("La moyenne est de " + Math.round(moyenne*10)/10);
// console.log(
//   "la moyenne est de " +
//     (tabNotes[0] +
//       tabNotes[1] +
//       tabNotes[2] +
//       tabNotes[3] +
//       tabNotes[4] +
//       tabNotes[5] +
//       tabNotes[6]) /
//       tabNotes.length,
// );
