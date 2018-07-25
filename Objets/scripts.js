let Character={
    name:"Grunt",
    age: 35,
    items_to_give:["axe","staff","shield","orb"],
    level:30,
    life:75,
    weapon:{
        name:"Low Level Club",
        damage: 15,
    },


}
let givenItems=[];

for (i in Character){
    console.log(Character[i]);
}


//Random number generator           
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }



let giveItem=()=>{
    let itemPick=getRandomInt(Character.items_to_give.length);
    givenItems.push(Character.items_to_give[itemPick]);
    Character.items_to_give.splice(itemPick,1);
    
}

let itemsForSale=[
    {
        title:"Axe of the Blood God",
        physics: 45,
        magic: 50,
        minLevel:20,
        available:true,
    },
    {
        title:"Sexy Bra of Magic Resistance",
        physics: 10,
        magic:100,
        minLevel:40,
        available:true,

    },
    {
        title:"Sword of Infinity+1",
        physics: 150,
        magic:150,
        minLevel:100,
        available:false,
    }
]

let displayItems=()=>{
    for (i=0;i<itemsForSale.length;i++){
        console.log(itemsForSale[i].title);
    }
};

let availableItems=()=>{
    for (i=0;i<itemsForSale.length;i++){
        if (itemsForSale[i].available=true){
            console.log(itemsForSale[i].title);
        }
    }
}

let displayByLevel=(level)=>{
    for (i=0;i<itemsForSale.length;i++){
        if (itemsForSale[i].minLevel>=level){
            console.log(itemsForSale[i].title);
        }
    }
}

displayItems();
availableItems();
displayByLevel(40);

let mainCharacter ={
    name:"Conan",
    level:25,
    life:150,
    weapon:{
        name:"Grayswandir",
        damage:9000,
    },
    attack:function() {
        return mainCharacter.name+" attaque avec l'arme " +mainCharacter.weapon.name+" les dégâts sont "+ mainCharacter.level*mainCharacter.weapon.damage;
    },
}

console.log(mainCharacter.attack());

function char (name,level,life,weapon, dmg){
    this.name=name,
    this.level=level,
    this.life=life,
    this.weapon={
        name:weapon,
        damage:dmg,
    },
    this.attack=function(opponent) {
        opponent.receiveDamage(this);
        console.log (this.name+" attaque  " +opponent.name);
        console.log ("avec l'arme "+this.weapon.name);
        console.log ("et lui inflige "+this.weapon.damage*this.level+"dégâts");
        console.log (opponent.name+" a maintenant"+ opponent.life+ "points de vie");
    }
    this.receiveDamage=function(opponent){
       return this.life-=opponent.level*opponent.weapon.damage;
    }
}

Hero= new char("Cartman",100,150,"Stick of Truth", 5);
Villain= new char("Butters", 10,450,"Nothing",3);

Hero.attack(Villain);

