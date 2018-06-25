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
   /* const obj=array.reduce(function(o,key){
        Object.assign(o,{[key]:whatever})
        return obj
    },{});*/ //Solution from stackoverflow, I don't get it.
    let obj={};
    for (i=0;i<array.length;i+=2){
        Object.assign(obj,{[array[i]]:array[i+1]})
    }
    array=obj;
    return array;
} 

var getAllLetters = function(array) {
   
    array2=array.toString();
    console.log(array2);
    array3=array2.split("").sort();
    for(i=0;i<array.length-1;i++){
        array3.shift();
    }
    for(i=0;i<array3.length;i++){
        if (array3[i]==array3[i+1]){
            array3.splice(i,1);
        }
    }
    console.log(array3);

    return array3;
}

var swapKeysAndValues = function(object) {
    let keys=Object.keys(object);
    let entries=Object.values(object);
    console.log(keys);
    console.log(entries);
    for(x in object){
        delete object[x];
        console.log(object);
    }
    for (x in entries){
        object[entries[x]]=keys[x];
    }
    console.log(object);
    return object;
}

var sumKeysAndValues = function(object) {
    console.log(object);
    console.log(Object.keys(object).reduce(function(total,num){return total+num})) //needs to be converted to Number
    console.log(Object.values(object).reduce(function(tot,numb){return tot+numb}))
    let key= Object.keys(object);
    let val= Object.values(object).reduce(function(tot,numb){return tot+numb});
    for (x in key){
        key[x]=Number(key[x]);
    }
    
    return key.reduce(function(total,num){return total+num})+val;
}

var removeCapitals = function(string) {
    console.log(string)
    let newString="";
    for (let i=0;i<string.length;i++){
        if (string.charAt(i)==string.charAt(i).toUpperCase() && string.charCodeAt(i) !=32){
            string=string.replace(string.charAt(i),"");
        }
        console.log(newString);

        
    }
    
    return string;
}

var roundUp = function(number) {
    console.log(number);
    return Math.ceil(number);
}

var formatDateNicely = function(date) {
    dateDay=date.getDate();
    console.log(date);
    dateMonth=date.getMonth()+1;
    dateYear=date.getFullYear();
    console.log(`${dateDay}-${dateMonth}-${dateYear}`)
    
    return `0${dateDay}/0${dateMonth}/${dateYear}`;
}

var getDomainName = function(string) {
    console.log(string)
    for (i=0;i<string.length;i++){
        for(j=string.length-1;j>=0;j--){
            if (string.charAt(i)== "@" && string.charAt(j)=="."){
               string= string.slice(i+1,j);
            }
        }
    }
    return string;
}

var titleize = function(string) {
    let exclusions=["And","Or","The","Of"]
  
    for (let i=0;i<string.length;i++){
        if (string.charCodeAt(i-1)==32 || string.indexOf(i)==0){
            string= string.replace(string.charAt(i), string.charAt(i).toUpperCase())
            }
        }
    for (let i=0;i<exclusions.length;i++){
        string=string.replace(" "+exclusions[i]," "+exclusions[i].toLowerCase());
    }
    for (let i=0;i<exclusions.length;i++) {
        string=string.replace(". "+exclusions[i].toLowerCase(), ". "+exclusions[i]);
    }
    /*string=string.replace(" And", " and");
    string=string.replace(" The", " the");
    string=string.replace(". and",". And");*/

    console.log(string)
    return string;
}

var checkForSpecialCharacters = function(string) {
    let regex1=/[@&%=]/i

    return regex1.test(string);
}

var squareRoot = function(number) {

    return number**0.5;
}

var factorial = function(number) {
    console.log(number);
    if (number===0 || number===1){
        return 1;
    }
    else{
        for(i= number-1;i>=1;i--){
            number*=i;
        }
    }
    return number;
}

var findAnagrams = function(string) {

    let array=string.split("");
    let result=[];
    let comboLength=1;
    let indexes=[];
    let solution=[];
    
    //generate array of indexes to be able to filter duplicates but allow double letter words
    for (i=0;i<array.length;i++){
      indexes.push(i);
    }
    
    // push the individual letters in the result
    for (i=0;i<array.length;i++){
      result.push(indexes[i].toString()); 
    }
    
    // generate pairs
    let pairs=()=>{
      let addLetter=[];
      for (i=0;i<array.length;i++){
        for (j=0;j<array.length;j++){
            addLetter=indexes[i].toString()+indexes[j].toString();
            switch(indexes[i]){
                case indexes[j]:
                break;
              default:
                result.push(addLetter);
            }        
          }
        }
      comboLength+=1
    }
    
    // combine generated strings with origin letters
    combinator=()=>{
    let toCombine=result.filter(function(e){return e.length==comboLength});
      let addMore=[];
      for (n=0;n<toCombine.length; n++){
        for(m=0;m<array.length;m++){
          let include= toCombine[n].includes(indexes[m].toString());
          switch(include){
            case true:
              break;
            default:
              addMore=toCombine[n]+indexes[m].toString();
              //console.log(addMore);
              result.push(addMore);
          }
        } 
      }
      comboLength+=1;
      if (comboLength==word.length){
        return;
      }
      else{
        combinator();
      }
    }
    
    //converts a string of numbers into the corresponding anagram
    let converter=(num)=>{
      var work=num.split("");
      for (i=0;i<work.length;i++){
        work[i]=Number(work[i]);
        //console.log(work);
      }
      for (j=0;j<work.length;j++){
        work[j]=array[work[j]];
      }
      work = work.join("");
      //console.log(num);
      //console.log(work);
      return work;
    }
    
    //loops converter through results
    recombine=()=>{
      for (n=0;n<result.length;n++){
        solution.push(converter(result[n]));  
      }
    }
    
    pairs();
    combinator();
    recombine();
    let final=solution.filter(function(e){return e.length==string.length});
    // console.log(final);
        return(final);
}
var convertToCelsius = function(number) {
    console.log(number);

    fahrenheitToCelsius=temperature=>{
        temperature=(temperature-32)/1.8;
        temperature=Math.round(temperature);
        return temperature;
    }

    return fahrenheitToCelsius(number);
}

var letterPosition = function(array) {
    console.log(array);
   
    let result=[];
    let alphabet={
        a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26
    }

    for (let i=0;i<array.length;i++){
       let letter=(array[i].toLowerCase());
       result.push(alphabet[letter]);
    }
    return result;
}
