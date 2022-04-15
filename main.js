//Salaire selon choix de poste //
var poste = document.getElementById("poste");
var nombreHeureSup = document.getElementById("heures-sup").value;
var nombreHeure = document.getElementById("heures").value;
var salaire = 18.88;
const salairePat = 18.88;
const salaireSup = 21.88;
var salaireSupplementaire = 28.32;
var brut;
var net;

function choixPoste() {
  if (poste.value == "Superviseur") {
    salaire = salaireSup;
    salaireSupplementaire = 32.82;
    document.getElementById("salaire").innerHTML = salaireSup.toString() + "$";
  } else {
    salaire = salairePat;
    salaireSupplementaire = 28.32;
    document.getElementById("salaire").innerHTML = salairePat.toString() + "$";
  }
}

function nombreHr(number) {
  nombreHeure = number.value;
}

function nombreHrSup(number) {
  nombreHeureSup = number.value;
}

function salaireDeuxSemainesBrut() {
  brut =
    parseInt(nombreHeure) * salaire +
    parseInt(nombreHeureSup) * salaireSupplementaire;
  document.getElementById("salaire-2semaines").innerHTML =
    brut.toFixed(2) + "$" + " brut";
}

function salaireDeuxSemainesNet() {
  var sansRetenues =
    parseInt(nombreHeure) * salaire +
    parseInt(nombreHeureSup) * salaireSupplementaire;

  var RRQ = sansRetenues * 0.057;
  var IMPFED = sansRetenues * 0.03;
  var RQAP = sansRetenues * 0.00494;
  var COTAE = sansRetenues * 0.012;
  var IMPPROV = sansRetenues * 0.04;
  var AFPCROS = sansRetenues * 0.0212;
  var retenues = RRQ + IMPFED + RQAP + COTAE + IMPPROV + AFPCROS;

  net = sansRetenues - retenues;

  document.getElementById("salaire-2semainesnet").innerHTML =
    "≈" + net.toFixed(2) + "$" + " net";
}

function salaireMoisBrut() {
  var salaremois = brut * 2;
  document.getElementById("salaire-mois").innerHTML =
    salaremois.toFixed(2) + "$" + " brut";
}

function salaireMoisNet() {
  var salairemoisnet = net * 2;
  document.getElementById("salaire-moisnet").innerHTML =
    "≈" + salairemoisnet.toFixed(2) + "$" + " net";
}

function salaireAnnuelBrut() {
  var salaireAnnuel = brut * 24;
  document.getElementById("salaire-annee").innerHTML =
    salaireAnnuel.toFixed(2) + "$" + " brut";
}

function salaireAnnuelNet() {
  var salaireAnnuelnet = net * 24;
  document.getElementById("salaire-anneenet").innerHTML =
    "≈" + salaireAnnuelnet.toFixed(2) + "$" + " net";
}
