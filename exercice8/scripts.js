const askAge = age =>{
    age=document.getElementById("age").value;
    if (age>17){
        alert("Vous êtes majeur");
    }
    else{
        alert("Vous êtes mineur");
    }
}