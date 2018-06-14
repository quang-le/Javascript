//Variables
    /*var solution=["B","O","N","J","O","U","R"]; 
    var guesses=[];                             
    var answer=["_","_","_","_","_","_","_"];   */
    
    var solution=[];
    var answer=[];

    var guesses =[];
    console.log(solution, answer);

    let printAnswer=document.createElement("P");        //affiche les traits "vides"
    let answerText=document.createTextNode(answer.join("."));

    let printGuesses=document.createElement("P");       //affiche les lettres déjà essayées
    let guessesText=document.createTextNode(guesses.reverse().join("-"));

    var guess="";
    var trigger=false;
    
//Functions

    //Determine word to figure out and create corresponding array
    askRiddle=()=>{
        let riddle=prompt("Quel mot veux-tu faire deviner?");
        if (typeof riddle=='string'){
            solution=riddle.split("");
            console.log("solution= "+solution);
            console.log(solution.length);
            console.log("askRiddle");
        }
        else{
            //solution=[];
            return alert ('Stop being silly');
        }
    }

    //Generate the array used to dispaly player progress
    generateAnswer=()=>{
        for (g=0; g<solution.length; g++){
            answer.splice(g,1,'_');
            console.log ("answer= "+answer);
            console.log("generateAnswer");
        }
    }
    //Just wanted to mess out with DOM in js
    generateHTML=(tag,content)=> {
        tag.appendChild(content);
        document.body.appendChild(tag)
    } 
    //show player guesses and reveal answser
    updateHTML=(where,what)=> {
        where.innerHTML=what.join();
        console.log("update html= "+what.join());
    }

    // get player guesses and update array accordingly
    playerGuess=()=>{
        document.getElementById("valider").addEventListener("click",function() {
            guess= document.getElementById("lettre").value; /*Older solution with prompt -> guess=prompt("Entrez une lettre");*/
            guesses.push(guess);
            trigger=true;
            console.log("guesses array= "+guesses);
            console.log("guess= "+guess);
            console.log(trigger);
            console.log("playerGuess");
        }) ; 
    }

    //determine if player guessed right letter and/or won
    compareLetters=()=>{
        for (let i=0; i<solution.length; i++){  //compare l'input du joueur à la solution)
            if (guess==solution[i]){
                let guessAmount=i+1;
                alert("Félicitations, la lettre "+solution[i]+" se trouve en position"+ guessAmount);
                answer.splice(i,1,guess);       //remplit la solution avec les lettres devinées
                console.log("new answer= "+answer);
                console.log("compareLetters"); 
            }
            else {
                alert ("essayez encore");
            }
        }        
    }

    // assemble game functions into sequence
    playGame=()=>{
        playerGuess();

        if (trigger==true){
            compareLetters();
        }

        console.log(guesses);
       
        // affiche les arrays mis à jour
        updateHTML(printAnswer,answer);
        updateHTML(printGuesses,guesses);

        if (trigger==true){
            if(solution.join()==answer.join()){
                return alert("Félicitations, la solution était "+answer.join());
            }
            else{
                alert("Essayez encore");
                trigger=false;
                playGame();
            } 
        }  
    }

//Run 
guessLetter=()=>{
    console.log(trigger);
    askRiddle();
    generateAnswer();
    console.log(solution);
    console.log(answer);
    generateHTML(printAnswer,answerText);
    generateHTML(printGuesses,guessesText)
    playGame();
}
window.onload=()=> guessLetter();