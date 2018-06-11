var reset=document.querySelector('button');
reset.onclick=()=> {
    document.getElementById("nom").setAttribute("value","");
    document.getElementById("prenom").setAttribute("value","");
    document.getElementById("ville").setAttribute("value","");
}
