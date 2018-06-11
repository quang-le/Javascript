var ancres=document.querySelectorAll("a");
jourNuit=tableau=>{
    tableau[0].onclick=()=> document.getElementById("texte").setAttribute("style", "display:block");
    tableau[1].onclick=()=> document.getElementById("texte").setAttribute("style", "display:none");
}