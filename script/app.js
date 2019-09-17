let playground = document.getElementById("game-area");
let ctx = playground.getContext("2d")

// Create gradient
var grd = ctx.createLinearGradient(100,0,100,100);
grd.addColorStop(0,"#8bcbf1");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,150);
