var v1 = {
  marque: "Yotota",
  model: "Riyas",
  nombre: 10,
  prix: 8000,
};
var v2 = {
  marque: "Yotota",
  model: "Risau",
  nombre: 5,
  prix: 7500,
};
var v3 = {
  marque: "Nautre",
  model: "Negan",
  nombre: 13,
  prix: 5000,
};

var parcVoiture = {
  nom: "monSuperParc",
  adresse: {
    libelle: "12 rue des fleurs",
    CP: "3100",
    ville: "Toulouse",
  },
  voiture: [v1, v2, v3],
  afficherVoitures: function () {
    for (var i = 0; i < this.voiture.length; i++) {
      var txt = "Voiture " + (i + 1) + "\n";
      txt += "Marque : " + this.voiture[i].marque + "\n";
      txt += "Modele : " + this.voiture[i].model + "\n";
      txt += "Nombre : " + this.voiture[i].nombre + "\n";
      txt += "Prix : " + this.voiture[i].prix + "\n";
      txt += "*************************";
      console.log(txt);
    }
  },
  afficherParc: function () {
    var txt = "le parc " + this.nom + " présent à l'adresse : \n";
    txt += this.adresse.libelle + "\n";
    txt += this.adresse.CP + " " + this.adresse.ville + "\n";
    txt += "************* Parc Voiture ***********\n";
    txt += "**************************************";

    console.log(txt);
    this.afficherVoitures();
  },
};

parcVoiture.afficherParc();
