//Variables
var ctx=document.getElementById("shmup").getContext("2d");
var position=425;
var squad=[];
//draw gun
gun=(gunPosition)=>{
        ctx.clearRect(0,650,900,50);
        ctx.beginPath();
        ctx.moveTo(gunPosition,700);
        ctx.lineTo((gunPosition+50),700);
        ctx.lineTo((gunPosition+25),650);
        ctx.lineTo((gunPosition),700);
        ctx.closePath();
        ctx.stroke();
}

shoot=(shotX,shotY)=>{
        ctx.strokeRect(shotX,shotY,1,20);
        ctx.moveTo(position, 650);

        
}

//Function object to create ennemies easily
function ennemy(x,y,size,a){
                this.x=x;
                this.y=y;
                this.size=size;
                this.angle=a;
            
                this.draw=function(){
                    ctx.save();
                    var x=this.x;
                    var y=this.y;
                    var s=this.size;
                    ctx.translate(x,y);
                    ctx.rotate(this.angle*Math.PI/180);
                    ctx.strokeRect(-s / 2, -s / 2, s, s);
                    ctx.restore();
                }
            }
//Random number generator           
function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}
//Generate random ennemies             
generateEnnemy = (amount)=>{
        
        for (i=0;i<amount;i++){
                squad[i]= new ennemy(getRandomInt(900),0,getRandomInt(40),0);
                squad[i].draw();
        }
}
//move with mouse
/*document.addEventListener("click", function(event){
        let x=event.button;
        console.log(x);
        if(x==0){
                position-=10;
                console.log("moved left");        
        }
        else if (x==2){
                position+=10;
                console.log("moved right");
        }
        gun(position);
})*/

//move with keyboard NEEDS FOCUS TO WORK
window.onkeydown=function(event){
        let x=event.keycode || event.which;
        console.log(x);
        if(x==37){
                position-=10;
                console.log("moved left");        
        }
        else if (x==39){
                position+=10;
                console.log("moved right");
        }
        gun(position);
}


//Run
gun(position);
generateEnnemy(5);
console.log(squad);
shoot((position+25),625);
