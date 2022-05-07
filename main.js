var canvas=document.getElementById("olysymbol");
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=1;
ctx.arc(150,143,400,200);
ctx.stroke();