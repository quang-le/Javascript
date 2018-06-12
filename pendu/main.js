var solution=["B","O","N","J","O","U","R"];
var guesses=[];

guessLetter=()=>{
    guess=prompt("Entrez une lettre");
    guesses.unshift(guess);
    for (let i=0; i<solution.length; i++){
        if (guess==solution[i]){
            let guessAmount=i+1;
            alert("Félicitations, la lettre "+solution[i]+" se trouve en position"+ guessAmount);   
        }
    }
    alert("Essayez encore");
    guessLetter();
}
window.onload=()=> guessLetter();