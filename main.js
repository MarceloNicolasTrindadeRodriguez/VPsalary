//Salaire selon choix de poste //
var poste = document.getElementById("poste");
let nombreHeure = document.getElementById("heures").value;
let nombreHeureSup = document.getElementById("heures-sup").value;
const salaireSup = 21.88;
const salairePat = 18.88;

function choixPoste() {
  if (poste.options[poste.selectedIndex].text === "Superviseur") {
    document.getElementById("salaire").innerHTML = "21,88$";
  } else if (poste.options[poste.selectedIndex].text === "Patrouilleur") {
    document.getElementById("salaire").innerHTML = "18,88$";
  }
}

function salaireDeuxSemaines() {
  let result;
  while (nombreHeureSup === 0) {
    if (poste.options[poste.selectedIndex].text === "Superviseur") {
      result = nombreHeure * salaireSup;
      console.log(result.toString());
    }
  }
}

function test() {
  document.getElementById("salaire-2semaines").innerHTML = nombreHeure;
}
