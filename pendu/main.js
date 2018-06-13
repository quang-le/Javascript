

guessLetter=()=>{
//Variables
    var solution=["B","O","N","J","O","U","R"]; // la solution
    var guesses=[];                             //stocke les tentatives du joueur
    var answer=["_","_","_","_","_","_","_"];   //sert à afficher les lettres devinées
    
    let printAnswer=document.createElement("P");        //affiche les traits "vides"
    let answerText=document.createTextNode(answer.join("."));

    let printGuesses=document.createElement("P");       //affiche les lettres déjà essayées
    let guessesText=document.createTextNode(guesses.reverse().join("-"));
    
//Functions
    generateHTML=(tag,content)=> {
        tag.appendChild(content);
        document.body.appendChild(tag)
    } 
    
    updateHTML=(where,what)=> where.innerHTML=what.join();
    
    compareLetters=()=>{
        guess= document.getElementById("lettre").value;   //Older solution with prompt -> guess=prompt("Entrez une lettre");
        guesses.push(guess);
        for (let i=0; i<solution.length; i++){  //compare l'input du joueur à la solution)
            if (guess==solution[i]){
                let guessAmount=i+1;
                alert("Félicitations, la lettre "+solution[i]+" se trouve en position"+ guessAmount);
                answer.splice(i,1,guess);       //remplit la solution avec les lettres devinées
                console.log(answer); 
            }
        } 
     
    }

    generateHTML(printAnswer,answerText);
    generateHTML(printGuesses,guessesText);

    //Game
    playGame=()=>{
        compareLetters();

        console.log(guesses);
       
        // affiche les arrays mis à jour
        updateHTML(printAnswer,answer);
        updateHTML(printGuesses,guesses);


        if(solution.join()==answer.join()){
            return alert("Félicitations, la solution était "+answer.join());
        }
        else{
            //alert("Essayez encore");
            playGame();
        }   
    }
    playGame();
}
window.onload=()=> guessLetter();