/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
 //on remplace le premier e par un espace
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
//on mes add les 2 text
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
//on extrait le 5em caractére
var afficherCar5 = function (texte) {
    return texte.slice(4,5);;
}
//on extrait les 9 premier caractaire
var afficher9Car = function (texte) {
    return texte.substr(0,9);;
}
//on mes en MAJ les chaine de caractaire
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
//mettre les caractaire en minuscule
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
//suprimé les espace de la chaine avec la function trim
var SupprEspaceString = function (texte) {
    return texte.trim();
}
//si ce n'est pas un nombre ne l'autorise pas
var IsString = function (texte) {
    return isNaN(texte);
}
// on recupère les derniers caractères de la chaine
var AfficherExtensionString = function (texte) {
    return texte.slice(-3);
}
//on compte le nombre d'espace dans la chaine de caractaire
var NombreEspaceString = function (texte) {
    return texte.split(' ').length -1;
}
//on split le texte en une liste, on l'inverse et on recolle les morceaux
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
 //on retourne X p Y
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
// on retourne la valeur absolute
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
// on change toute les valeur en valeur absolute
var valeurAbsolueArray = function (array) {
    for (i=0; i<array.length; i++){
        array[i]=Math.abs(array[i]);
    }
    return array;
}
//affiche la valeur absolute
var sufaceCercle = function (rayon) {
    return Math.round( Math.PI * rayon *rayon );;
}
//calculé l'hipoténus d'un triangle rectangle
var hypothenuse = function (ab, ac) {
    return Math.hypot( ab ,ac );
}
//calculé IMc poids taille ne garde que 2 chiffre aprés la virgule
var calculIMC = function (poids, taille) {
    var IMC = (poids / ( taille * taille )).toPrecision(4);
    return Number(IMC);
}
