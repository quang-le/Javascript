var ctx=document.getElementById("shmup").getContext("2d");

var gun=ctx.clearRect(0,0,900,700);
        ctx.beginPath();
        ctx.moveTo(425,700);
        ctx.lineTo(475,700);
        ctx.lineTo(450,650);
        ctx.lineTo(425,700);
        ctx.closePath();
        ctx.stroke();