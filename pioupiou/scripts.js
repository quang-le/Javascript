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

//move with keyboard
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