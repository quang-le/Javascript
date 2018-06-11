document.getElementById("nom").setAttribute("value","is this correct?");
valeur= document.getElementById("nom").value;
document.body.onkeydown=()=>alert(valeur);