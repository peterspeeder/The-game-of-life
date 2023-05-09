// life's a game.

function make2DArray(cols, rows){
  let arr = new Array(cols);
  for(let i = 0; i < arr.length; i++){
     arr[i] = new Array(rows);
  } 
  
  return arr;
}


let grid;
let cols; 
let rows; 
let res = 20; // resolution

function setup(){
  createCanvas(600, 400);
  cols = width / res;
  rows = height / res;
  
  grid = make2DArray(cols, rows);
  for(let i =0; i<cols; i++){
    for(let j =0; j<rows; j++){
      grid[i][j] = floor(random(2));
    }
  }
}

function draw(){
    background(0);
    for(let i =0; i<cols; i++){
      for(let j =0; j<rows; j++){
        let x = i * res;
        let y = j * res;
        
        if(grid[i][j] == 1){
          fill(255);
          rect(x, y, res, res);
          
        }
        
       
    }
  }
  console.log(console.table(grid));
}
