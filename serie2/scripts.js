/*exercice1*/
const getNumber = number => parseInt(number);

const surfaceRectangle=(longueur, largeur)=>{
   longueur= prompt("longueur du rectangle en cm");
   largeur= prompt("largeur du rectangle en cm");
   longueur= getNumber(longueur);
   largeur=getNumber(largeur);
   alert("La surface du rectangle est de "+longueur*largeur+" cm2");
}
const periRectangle=(long, large)=>{
    long= prompt("longueur du rectangle en cm");
    large= prompt("largeur du rectangle en cm");
    long=getNumber(long);
    large=getNumber(large);
    alert("Le périmètre du rectangle est de "+(long+large)*2+" cm");
 }
/*exercice 2*/
 var radius="0"
 let askRadius= () =>{
     radius=prompt("Entrez le rayon du cercle");
     radius=getNumber(radius);
     radius=Math.PI*Math.pow(radius,2);
     return radius; 
 }

 const displayResult = () => alert(radius);

/*exercice3*/
var a=3;
var b=2;

let triple = x => {return x*3};
let affiche = ()=> {
    alert(triple(a));
    alert(triple(b));
}

/*exercice4*/
var tab=[-2,1,4];
let additionne = x => {return x+2};

let affiche2= ()=>{
    alert(additionne(tab[0]));
    alert(additionne(tab[2]));
}
/*exercice5*/
let calculDebile =()=>{
    alert("valeurs initiales a= "+a+" b= "+b);
    a=b++;
    alert("a=b, b=b+1. Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a=++b;
    alert("a=b+1. Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a=b--;
    alert("a=b, b= b-1. Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a=--b;
    alert("a=b-1. Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a+=b++;
    alert("a=a+b, b=b+1. Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a=1; a+=++b;
    alert("a=1, suivi de a=a+(b+1). Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a=1; a-=b++;
    alert("a=1, suivi de a=a-b, b=b+1. Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a=1; a-=++b;
    alert ("a=1, suivi de a=a-moins(b+1). Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a=1; a+=b--;
    alert("a=1, suivi de a=a+b, b=b-1. Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
    a=1; a+=--b;
    alert("a=1, suivi de a=a+(b-1). Nouvelle valeur de a= "+a+", nouvelle valeur de b= "+b);
}
/*exercice 6*/
let soustrait = x=>{
    if (x>-1){
        return x-2;
    }
    else {
        return x= "Nombre négatif!"
    }
}
let affiche3 = ()=> {
    alert(soustrait(tab[0]));
    alert(soustrait(tab[2]));
}
/*exercice7*/
let faireChoix=()=>{
    choix=prompt("Choisis 1, 2 ou 3");
    choix=getNumber(choix);
    if (choix==1){
        alert("Merci!");
    }
    else if(choix==2){
        alert("Bonjour!");
    }
    else if (choix==3){
        alert ("Au revoir");
    }
    else {
        alert("Que voulez-vous dire?");
    }
}
/*exercice8*/
var now=new Date();
var jour=now.getDay();
var semaine=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];

jourSemaine=()=> alert(semaine[jour]);
choixDansLaDate=()=>alert(now);

/*exercice9*/

testWhile=()=>{
    padipado=prompt("écris un mot qui contient la lettre p");
    ouinon=padipado.includes("p");
    while(ouinon==false){
        padipado=prompt("écris un mot qui contient la lettre p");
        ouinon=padipado.includes("p");
    }
    alert(padipado);
}
/*exercice10*/
var resultat=0;
somme=()=>{
    for(let timesAsked=0;timesAsked<3; timesAsked++){
        nombre=prompt("saisissez un nombre");
        nombre= getNumber(nombre);
        resultat=resultat+nombre;
    }
    alert(resultat);
}
/*exercice11*/
calculMoyenne=()=>{

    checkEntier=(prompt)=>{
       return Number.isInteger(Number(prompt));  
    }

    Entier=prompt("Entre un nombre entier")
    while (checkEntier(Entier)==false){
        Entier=prompt("Erreur! Entre un nombre entier");
    }

    Entier=Number(Entier);
    comptage=1;
    agregate= Entier;
    console.log(Entier,comptage, agregate)

    extraNumber=prompt("Entre un nouveau nombre entier");

    while (checkEntier(extraNumber)==false){
        extraNumber=prompt("Erreur! Entre un nombre entier!!");
    }

    extraNumber=parseInt(extraNumber);
    comptage=comptage+1;
    console.log(Entier,extraNumber, comptage, agregate);

    while (extraNumber>-1) {
        agregate+=extraNumber;
        extraNumber=prompt("Entre un encore un nombre entier");
        extraNumber=Number(extraNumber);
        while (checkEntier(extraNumber)==false){
            extraNumber=prompt("Erreur! Entre un nombre entier!!");
            extraNumber=Number(extraNumber);

        }
        comptage=comptage+1;
        console.log(Entier,extraNumber, comptage, agregate);
    }
    if (extraNumber<0){
        comptage-=1;
    }
 
    alert (agregate/comptage)
    
    console.log(Entier,extraNumber,comptage,agregate);
}
