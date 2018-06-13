let limit=prompt("combien de fois?")

exo =input=>{
string=String(input);
let display=" ";

limit=Number(limit);

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