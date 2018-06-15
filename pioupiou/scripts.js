//Variables
var ctx=document.getElementById("shmup").getContext("2d");
var position=425;
var squad=[];
var trailY=625;
var shotCount=0;
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
        
        let shotTimer=200;
        let shotDraw=()=>{
                for(i=0;i<26;i++){
                        ctx.moveTo(position, 650);
                        ctx.strokeRect(shotX,shotY,1,20);
                        console.log("drawn");
                        setTimeout(function(){shotAnimation(shotX,shotY)},shotTimer);
                        setTimeout(function(){shotY-=25;}, shotTimer+100);
                        setTimeout(function(){ctx.strokeRect(shotX,shotY,1,20);},shotTimer+100);
                       // setTimeout(function(){shotAnimation(shotX,shotY)},shotTimer+2000);
                        console.log("looped")
                        shotTimer+=200;
                      
                }
        }

        let shotAnimation=(shotX,shotY)=>{
                ctx.clearRect(shotX-2,shotY-1,15,22);
                console.log("erased");     
        }

        shotDraw();
        



}

/*shotAnimation=()=>{
        trailY-=25;
        ctx.clearRect((position+23),(trailY+24),15,22);             
}*/

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
generateEnnemyRandom = (amount)=>{
        
        for (i=0;i<amount;i++){
                squad[i]= new ennemy(getRandomInt(900),0,getRandomInt(40),0);
                squad[i].draw();
        }
}

generateEnnemyLine = (amount,h,v,d)=>{
        let prout=0;
        for (i=0;i<amount;i++){
                squad[i]= new ennemy(h-(prout+d),v,30,0)
                squad[i].draw();
                prout+=d;
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
        if (x==32){
                if(shotCount==5){
                        setTimeout(function(){shotCount=0},5000);
                }
                else{
                        shoot((position+25),trailY);
                        shotCount+=1;
                        console.log("shot");
                }
        }

        else if (x==39){
                if (position==875){
                        console.log("reach right limit");
                }
                else{
                        position+=10;
                        console.log("moved right");
                        console.log(position);
                }
        }
        else if(x==37){
                if (position==-25){
                        console.log("reach left limit")
                }
                else{
                        position-=10;
                        console.log("moved left"); 
                        console.log(position); 
                }      
        }
        gun(position);
}


//Run
gun(position);
//generateEnnemyRandom(5);
console.log(squad);
//shoot((position+25),625);
generateEnnemyLine(7,850,50,100);
