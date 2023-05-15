# Game of Life

This is an implementation of the Game of Life, a cellular automaton devised by British mathematician John Horton Conway in 1970. The game consists of a grid of cells, each of which can be in one of two states: alive or dead. The state of a cell at time t is determined by the state of its eight neighbors at time t-1, according to the following rules:

A dead cell with exactly three live neighbors becomes a live cell (birth).
A live cell with two or three live neighbors survives (survival).
In all other cases, a cell dies or remains dead (death).
The implementation is written in JavaScript using the p5.js library, and is based on a 2D array representing the grid of cells.

# Usage

To run the code, you can copy and paste it into an HTML file with the p5.js library included, or you can run it using the p5.js web editor at editor.p5js.org.

# Code Explanation

make2DArray(cols, rows): a function that creates a 2D array with cols columns and rows rows, filled with undefined values.
setup(): a p5.js function that runs once at the beginning of the sketch, and sets up the canvas and the initial state of the grid.
draw(): a p5.js function that runs repeatedly in a loop, and updates the state of the grid and draws it on the canvas.
countNeighbours(grid, x, y): a function that counts the number of live neighbors of the cell at position (x, y) in the grid.
next: a new 2D array that represents the next state of the grid, computed based on the current state of the grid.
The rules of the Game of Life are implemented in the draw() function, where each cell is checked against its neighbors to determine its next state.

# Modification

You can modify the resolution of the grid by changing the value of the res variable, and you can modify the size of the canvas by changing the arguments of the createCanvas() function in the setup() function. You can also modify the rules of the game by changing the conditions in the if...else if...else block in the draw() function.

![alt_text](https://github.com/peterspeeder/The-game-of-life/blob/main/Game%20Of%20Life/presentation.png)
![alt_text](https://github.com/peterspeeder/The-game-of-life/blob/main/Screenshot%202023-05-15%20at%203.36.25%20PM.png)
