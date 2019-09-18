const playground = document.getElementById("game-area");
const ctx = playground.getContext("2d")
const scoreElement = document.getElementById("score");

const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;
let grd = ctx.createLinearGradient(500,0,700,700);
          grd.addColorStop(0,"#8bcbf1");
          grd.addColorStop(1,"white");
const VACANT = grd; // color of an empty square

// draw square
function drawSqure (x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);
    ctx.strokeStyle="white"
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ)
} 

// create board
let board = [];
for(r=0;r<ROW;r++){
  board[r]=[];
  for(c=0;c<COL;c++){
    board[r][c] = VACANT
  }
}

// draw board
function drawBoard(){
  for(r=0;r<ROW;r++){
    for(c=0;c<COL;c++){
      drawSqure (c,r,board[r][c])
    }
  } 
}

drawBoard()

// piece and color

const PIECES = [
    [Z,"#f44336"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

// initate a piece

let p = new Piece(PIECES[0][0],PIECES[0][1])

function Piece(tetromino,color){
  this.tetromino = tetromino
  this.color = color

  this.tetrominoN = 0; // we start from the first pattern
  this.activeTetromino = this.tetromino[this.tetrominoN];
  
  // we need to control the pieces
  this.x =0;
  this.y = 0;
}

// draw Piece in board

Piece.prototype.draw = function(){
  for(r=0;r<this.activeTetromino.length;r++){
    for(c=0;c<this.activeTetromino.length;c++){
      if(this.activeTetromino[r][c]){
        drawSqure (this.x+c,this.y+r,this.color)
      }
    }
  } 
}

Piece.prototype.moveDown = function(){
 this.y++;
 this.draw(); 
}


let dropStart = Date.now( )
function drop(){
  let now = Date.now();
  let delto = now -dropstart
  p.moveDown();
  requestAnimationFrame(drop)
}
drop()
// // Create gradient

// // Fill with gradient
