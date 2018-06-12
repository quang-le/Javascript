var CreationTableauLangages = function () {
    return langages=["Html","CSS","Java","PHP"];
}

var CreationTableauNombres = function () {
    return nombres=[0,1,2,3,4,5];
}

var RemplacementElement = function (langages) {
     langages.splice(2,1,"Javascript");
     return langages;
}

var AjoutElementLangages = function (langages) {
    langages.push("Ruby","Python");//langages.splice(4,0,Ruby","Python");
    return langages;


}

var AjoutElementNombres = function (nombres) {
    nombres.unshift(-2,-1);//langages.splice(0,0-2,-1);
    return nombres;

}

var SuppressionPremierElement = function (langages) {
    langages.shift();
    return langages;
}

var SuppressionDernierElement = function (langages) {
    langages.pop();
    return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let reseaux_sociaux=reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;

}

var ConversionTableauChaine = function (langages) {
    langages=langages.toString();
    return langages;

}

var TriTableau = function (reseaux_sociaux) {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
    reseaux_sociaux.reverse();
    return reseaux_sociaux;
}
