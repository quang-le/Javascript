/*var solution=["B","O","N","J","O","U","R"]; // la solution
var guesses=[];                             //stocke les tentatives du joueur
var answer=["_","_","_","_","_","_","_"];   //sert à afficher les lettres devinées*/

guessLetter=()=>{

    //Variables
    var askRiddle=prompt("Quel mot veux-tu faire deviner?");
    var solution=askRiddle.split("");
    var answer=[];
    var guesses=[];

    let printAnswer=document.createElement("P");        //affiche les traits "vides"
    
    let printGuesses=document.createElement("P");       //affiche les lettres déjà essayées 
    let guessesText=document.createTextNode(guesses.reverse().join("-")); 
    
    //Functions
    generateAnswer=()=>{
        for(j=0;j<solution.length;j++){
            answer.push("_");
            console.log("answer= "+answer);
            console.log(solution.length);
        }
        let answerText=document.createTextNode(answer.join("."));
        generateHTML(printAnswer,answerText);
    }

    generateHTML=(tag,content)=> {
        tag.appendChild(content);
        document.body.appendChild(tag);
    }

    updateHTML=(where,what)=> where.innerHTML=what.join(".");

    compareLetters=()=>{
        guess=prompt("Entrez une lettre");
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

    playGame=()=>{


        compareLetters();

        console.log(guesses);
       
        // affiche les arrays mis à jour
        updateHTML(printAnswer,answer);
        updateHTML(printGuesses,guesses);

        checkComplete();
    }

    checkComplete=()=>{
        if(solution.join()==answer.join()){
            return alert("Félicitations, la solution était "+answer.join());
        }
        else{
            alert("Essayez encore");
            playGame();
        }
    }

    //Run
    generateAnswer();
    generateHTML(printGuesses,guessesText);
    playGame();
}
window.onload=()=> guessLetter();