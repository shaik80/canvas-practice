
// let playground = document.getElementById("game-area");
// let ctx = playground.getContext("3d")
// // let img = document.getElementById("grass");
// var img = new Image();   // Create new img element
// img.src = 'grass.png';
// img.onload = function() {
//     ctx.drawImage(img, 0, 0,100,100);
// };
// img.src = 'http://pngimg.com/uploads/grass/grass_PNG401.png';
// // Create gradient
// // var grd = ctx.createLinearGradient(500,0,500,500);
// // grd.addColorStop(0,"#8bcbf1");
// // grd.addColorStop(1,"white");

// // Fill with gradient
// // ctx.fillStyle = grd;
// // ctx.fillRect(0,0,650,630);
// // ctx.drawImage(img, 10, 10);
function draw(){
    var drawing = document.getElementById("drawing");
    var con = drawing.getContext("2d");
    var goofyPic = document.getElementById("goofyPic");
    con.drawImage(goofyPic, 0, 0, 50, 50);
    var image2 = new Image();
    image2.src = "andyGoofy.jpg";
    con.drawImage(image2, 100, 100, 70, 50);
  } // end draw
 }
 