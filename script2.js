//global variables
let highscores = [];


//NEW GAME - create game board
function newGame (player1, player2){
    let playerOne = player1;
    let playerTwo = player2;
    // console.log("Player 1 is: " + playerOne);
    // console.log("Player 2 is: " + playerTwo);
    let curPlayer = playerOne;

    //create array values for the game board
    let gameBoard = [" "," ","5"," "," "," "," "," "," "];
    let gameCells = ["#topLeft","#topMid","#topRight","#midLeft","#midMid","#midRight","#botLeft","#botMid","#botRight" ];

    $("#topLeft").html('gameBoard[0]');
    $("#topMid").html('gameBoard[1]');
    $("#topRight").html('gameBoard[2]');
    $("#midLeft").html('gameBoard[3]');
    $("#midMid").html('gameBoard[4]');
    $("#midRight").html('gameBoard[5]');
    $("#botLeft").html('gameBoard[6]');
    $("#botMid").html('gameBoard[7]');
    $("#botRight").html('gameBoard[8]');
    console.log(gameBoard[0] +'|' + gameBoard[1] +'|' + gameBoard[2]);
    console.log(gameBoard[3] +'|' + gameBoard[4] +'|' + gameBoard[5]);
    console.log(gameBoard[6] +'|' + gameBoard[7] +'|' + gameBoard[8]);
    return;
}

//MAKE MOVE - assign an input value to the gameboard array
// function makeMove (curPlayer, cell){
//     let curPlayer = playerOne
//     //set symbol based on who is current player
//     if (curPlayer === player1){
//         let symbol = 'X';
//         } else {
//         let symbol = 'O';
//     }
//     //assign symbol to cell value
//     let gameboard[cell] = symbol;
// }


//WIN CHECK - check if a win is possible



// GAME RESET - clear the game board and 



newGame('Mick', 'Dave');