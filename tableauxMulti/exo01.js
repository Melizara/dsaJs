/**
 * Parcours d'une tableau multidimentionnel
 * Code
var tab1 = ["Tya", "MILO"];
var tab2 = ["Marco", "POLO"];
var tab3 = ["Pablo", "PICASSO"];
var tab = [tab1, tab2, tab3];

for (var i = 0; i < tab.length; i++) {
  for (var j = 0; j < tab[i].length; j++) {
    console.log(tab[i][j]);
  }
}
 */
var tab = [
  ["Tya", "MILO"],
  ["Marco", "POLO"],
  ["Pablo", "PICASSO"],
];

// console.log(tab[0][0] + " - "+tab[0][1]);
// console.log(tab[1][0] + " - "+tab[1][1]);
// console.log(tab[2][0] + " - "+tab[2][1]);

for (var i = 0; i < tab.length; i++) {
  console.log(tab[i][0] + " - " + tab[i][1]);
}
