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