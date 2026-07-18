var nombre = 5;

pairOuImpaire(nombre);
pairOuImpaire(7);
pairOuImpaire(22);

function pairOuImpaire(nombrePasse) {
  if (nombrePasse % 2 === 0) {
    console.log("Les nombre passée est paire : " + nombrePasse);
  } else {
    console.log("Les nombre passée est impaire : " + nombrePasse);
  }
}
