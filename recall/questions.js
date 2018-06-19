var selectElementsStartingWithA = function(array) {
    
    return array.filter(function(item){
       return item.startsWith("a")==true});
}

var selectElementsStartingWithVowel = function(array) {
    return array.filter(function(item){
        if(item.startsWith("a")==true || item.startsWith("i")==true || item.startsWith("e")==true || item.startsWith("o")==true || item.startsWith("u")==true){
            return item;
        }
    })
}

var removeNullElements = function(array) {
    return array.filter(function(item){
        
        return item!=null;
        })
    
}

var removeNullAndFalseElements = function(array) {
    console.log(array);
    return array.filter(function(item){
            return(typeof item==="string" || typeof item=="number")
    })
};


var reverseWordsInArray = function(array) {
        for(i=0;i<array.length;i++){
           array[i]=(array[i].split("").reverse().join("")); 
         }
         return array;       
}

var everyPossiblePair = function(array) {
    let array2=[]
    array.sort(); //met les éléments dans le bon ordre
    console.log(array2);
    for (i=0;i<array.length;i++){
        for (j=i+1;j<array.length;j++){ // j+1 pour faire le loop sur l'élément suivant, array.length pour empêcher undefined
        array2.push([array[i],array[j]]); //pq array2[i]=[array[i],array[j]] loop que 2 fois?? PARCE QU'IL REMPLACE LA PREMIERE PAIRE GENEREE PAR LA DEUXIEME!!
        }
    }
    console.log(array2);
    console.log(typeof array2[0]);
    return array=array2;
    }

var allElementsExceptFirstThree = function(array) {
    return array.slice(3,array.length);
}

var addElementToBeginning = function(array, element) {
    array.splice(0,0,element);
    return array;
}

var sortByLastLetter = function(array) {
    
    return array.sort(function(a,b){
        return a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1)
    })
}

var getFirstHalf = function(string) {
    return string.slice(0,(string.length+1)/2);
}

var makeNegative = function(number) {
    return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
    
    return array.filter(function (e){
       return e==e.split("").reverse().join("");

    }).length;
}

var shortestWord = function(array) {
    array.sort(function(a,b){
        return a.length-b.length;
    })
    return array[0];
}

var longestWord = function(array) {
    array.sort(function(a,b){
        return a.length-b.length;
    })
    return array[array.length-1];
}


var sumNumbers = function(array) {

    return array.reduce(function(total,num){ //total agrège les résultats, num= l'élément suivant à être ajouté
        return total+num;
    });
}

var repeatElements = function(array) {
    array.forEach(function(e){
         array.push(e);
         console.log(array)
        
    })
    return array;
}

var stringToNumber = function(string) {
    return Number(string);
}

var calculateAverage = function(array) {
    return (array.reduce(function(total,num){ //total agrège les résultats, num= l'élément suivant à être ajouté
        return total+num;}))/array.length;
    };

var getElementsUntilGreaterThanFive = function(array) {
    let array2=[]

        for (i=0;i<6;i++){
            array2.push(array[i]);
        }
    
    array=array2;
    return array;
}

var convertArrayToObject = function(array) {
    console.log(array.entries());
    return array.entries();
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
