


/*document.getElementById("nom").setAttribute("value","is this correct?");
var valeur= document.getElementById("nom").value;
window.onkeydown=function(event){
    let x=event.keycode;
    if(x==13){
        console.log("enter");
        return alert(valeur);
    }
    else {
    document.getElementById("nom").setAttribute("value", x);
    }
}*/


let valeur = document.getElementById("nom");
window.onkeydown=function(event){
    let x=event.keycode || event.which;
    if(x==13){
        console.log("enter");
        return alert(valeur.value);
    }
}