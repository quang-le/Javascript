/*exercice7*/
function myFunction(){
    resultat=(document.getElementById("pointure").value)*2;
    resultat+=5;
    resultat*=50;
    resultat-=document.getElementById("annee").value;
    resultat+=1766;
    alert(resultat);
    console.log(resultat);
}