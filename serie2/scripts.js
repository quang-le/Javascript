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