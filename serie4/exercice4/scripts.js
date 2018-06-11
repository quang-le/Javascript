var password=document.getElementById("motdepasse").value;
var confo=document.getElementById("confirmation").value;

verif=(input1,input2)=>{
    if (input1==input2){
        document.getElementById("motdepasse").setAttribute("style","border:1px solid green");
        document.getElementById("confirmation").setAttribute("style","border:1px solid green")
    }
    else{
        document.getElementById("motdepasse").setAttribute("style","border:1px solid red");
        document.getElementById("confirmation").setAttribute("style","border:1px solid red") 
    }
}