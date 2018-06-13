exo =input=>{
string=String(input);
let display=" ";
    for (count=0; count<5; count++){
        display=display+string;
        console.log(display);
    }
input+=1
if (input<6){
    exo(input)
}
else{
    return console.log("et voilà");
}
}
window.onload=()=>exo(1);