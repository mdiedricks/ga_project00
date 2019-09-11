//global variables
let highscores = [];

//in game variables
let winConditions = {
    win0: [1,1,1,0,0,0,0,0,0],
    win1: [0,0,0,1,1,1,0,0,0],
    win2: [0,0,0,0,0,0,1,1,1],
    win3: [1,0,0,1,0,0,1,0,0],
    win4: [0,1,0,0,1,0,0,1,0],
    win5: [0,0,1,0,0,1,0,0,1],
    win6: [1,0,0,0,1,0,0,0,1],
    win7: [0,0,1,0,1,0,1,0,0]
};
let gameBoard = [];
let curPlayer = '';
let playerOne = '';
let playerTwo = '';

//NEW GAME - create game board
function newGame (player1, player2) {

    playerOne = player1;
    playerTwo = player2;
    curPlayer = playerOne;

    //create array values for the game board
    gameBoard = [" "," "," "," "," "," "," "," "," "];
    
}

//MAKE MOVE - players can assign a symbolto a cell
function makeMove(cell){
    // turnery operator
    // (condition) ? trueStatement : falseStatement;
    let symbol = curPlayer === playerOne ? 'X' : 'O';

    //assign symbol to cell value
    cell.html(symbol);

    // Check win
    CheckWin();
    // TODO:
    // change curPlayer to be the other one.
    playerSwap();
}
//CHECK WIN - compare gameboard to the win conditions
function CheckWin() {
    // TODO: insert logic here
    let tempArr = arr;
    //convert gameboard arr holder to 1s and 0s
    // use this to compare against win conditions
    if (curPlayer === fstPlayer){
        for (i in tempArr){
            if (i === 'X'){
                arr[i] = 1;
            } else {
                arr[i] = 0;
            }
        }
    } else {
        for (i in tempArr){
            if (i === 'O'){
                arr[i] = 1;
            } else {
                arr[i] = 0;
            }
        }
    }
}
//SWAP PLAYERS - swap players at the end of  
function playerSwap(){
    if (curPlayer === playerOne){
        curPlayer = playerTwo;
    } else {
        curPlayer = playerOne;
    }
}

$('.cell').click(function() {
    // we have clicked on the cell
    // get the dom element that we clicked on, and pass it to our "makeMove" function
    let theClickedCell = $(this);
    makeMove(theClickedCell);
});



