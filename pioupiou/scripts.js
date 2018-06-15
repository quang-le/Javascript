var ctx=document.getElementById("shmup").getContext("2d");
var position=425;
//draw gun
gun=(gunPosition)=>{
        ctx.clearRect(0,0,900,700);
        ctx.beginPath();
        ctx.moveTo(gunPosition,700);
        ctx.lineTo((gunPosition+50),700);
        ctx.lineTo((gunPosition+25),650);
        ctx.lineTo((gunPosition),700);
        ctx.closePath();
        ctx.stroke();
}

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
function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}
              
generateEnnemy = (amount)=>{
        var squad=[];
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
