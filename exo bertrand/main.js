let limit=prompt("combien de fois?")

exo =input=>{
limit=Number(limit);
controlVar=parseInt(limit);
if (isNaN(controlVar)==true){
    return alert("Bien essayé, enfoiré!");
}
else if (limit>100){
    return alert("Va te faire voir, crapule!"); 
}

string=String(input);
let display=" ";

for (count=0; count<limit; count++){
        display=display+string;
        console.log(display);
    }
input+=1
if (input<=limit){
    exo(input)
}
else{
    return console.log("et voilà");
}

}
window.onload=()=>exo(1);