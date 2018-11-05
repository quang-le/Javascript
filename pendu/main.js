/*var solution=["B","O","N","J","O","U","R"]; // la solution
var guesses=[];                             //stocke les tentatives du joueur
var answer=["_","_","_","_","_","_","_"];   //sert à afficher les lettres devinées*/

guessLetter=()=>{

    //Variables
    let library = ["papa","mama","hallo","roboter","kabel","technik"]
    var solution= library[getRandomInt(library.length)].split("");
    var answer=[];
    var guesses=[];
    var wrongGuesses=[];

    let printAnswer=document.createElement("P");        //affiche les traits "vides"
    
    let printGuesses=document.createElement("P");       //affiche les lettres déjà essayées 
    let guessesText=document.createTextNode(guesses.reverse().join("-")); 
    let printwrongGuesses=document.createElement("P");       //affiche les lettres déjà essayées 
    let wrongGuessesText=document.createTextNode(wrongGuesses.reverse().join("-")); 
    
    //Functions
    //Random number generator           
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateAnswer=()=>{
        for(j=0;j<solution.length;j++){
            answer.push("_");
            console.log("answer= "+answer);
            console.log(solution.length);
        }
        let answerText=document.createTextNode("Lösung: "+answer.join("."));
        generateHTML(printAnswer,answerText,"solution");
    }

    generateHTML=(tag,content,container)=> {
        tag.appendChild(content);
        document.getElementById(container).appendChild(tag);
    }

    updateHTML=(where,what)=> where.innerHTML=what.join("-");

    compareLetters=()=>{
             //old solution: guess=prompt("Entrez une lettre");

        guess=document.getElementById("lettre").value;
        if (wrongGuesses.includes(guess)==true || guesses.includes(guess)==true){
            console.log("double essai");
        }
        else{
            guesses.push(guess);
            for (let i=0; i<solution.length; i++){  //compare l'input du joueur à la solution)
                if (guess==solution[i]){
                    let letterIndex=i+1;
                    alert("Félicitations, la lettre "+solution[i]+" se trouve en position"+ letterIndex);
                    answer.splice(i,1,guess);       //remplit la solution avec les lettres devinées
                    console.log(answer); 
                }
                else if (solution.includes(guess)==false && wrongGuesses.includes(guess)==false){
                    wrongGuesses.push(guess);
                    console.log(wrongGuesses);
                }
            
            }
        }     
    }

    playGame=()=>{
        document.getElementById("btn").addEventListener("click", function(){ 
            compareLetters();

            console.log(guesses); 
            updateHTML(printAnswer,answer);
            console.log("answer is "+answer);
            updateHTML(printGuesses,guesses); 
            console.log("guesses is "+guesses)
            updateHTML(printwrongGuesses,wrongGuesses); 
            console.log("wrongGuesses is "+wrongGuesses);

            checkComplete();   
        });
    }

    checkComplete=()=>{
        if(solution.join()==answer.join()){
            document.getElementById("lettre").value="";
            return alert("Félicitations, la solution était "+answer.join(""));
            
        }
        else{
            
            document.getElementById("lettre").value="";
            alert("Essayez encore");
        }
    }

    //Run
    generateAnswer();
    generateHTML(printwrongGuesses,wrongGuessesText,"wrongGuesses");
    generateHTML(printGuesses,guessesText,"allGuesses");
    playGame();  

}
//document.getElementById("start").addEventListener("click",guessLetter);
guessLetter();

