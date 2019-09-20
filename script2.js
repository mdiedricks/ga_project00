//global variables
let highscores = [];

let gameMode = false;
let gameBoard = [];
let cellArr = ['#topLeft','#topMid','#topRight','#cenLeft','#cenMid','#cenRight','#botLeft','#botMid','#botRight']
//let holderArr = [" "," "," "," "," "," "," "," "," "]
let curPlayer = '';
let playerOne = 'Player X';
let playerTwo = 'Player O';
let checkWinCount = 0;
let gameWon = false;

//NEW GAME - create game board
function newGame () {  
    return;
}

function startGame(player1, player2){
    gameWon = false;
    //set win checker to 0
    checkWinCount = 0;
    //engage game mode
    gameMode = true;
    //assign player names to global variables
    playerOne = player1;
    playerTwo = player2;
    //reset player 1 to be current player
    curPlayer = playerOne;
    //create array values for the game board
    gameBoard = [" "," "," "," "," "," "," "," "," "];
    //assign gameBoard values to values in html divs
    for (i = 0; i < cellArr.length; i++){
         $(cellArr[i]).html(gameBoard[i]);
    }
}

//MAKE MOVE - players can assign a symbol to a cell
function makeMove(cell, cellID){
    // turnery operator -- (condition) ? trueStatement : falseStatement;    
    let symbol = curPlayer === playerOne ? 'X' : 'O'; 
    //assign symbol to cell value
    cell.html(symbol);
    //concatenate cellID with a hash
    let cellHash = '#' + cellID;
    //assign symbol to holder array for win check
    //gameBoard[cellArr.indexOf(cellHash)] = symbol;    
    //TEST: build gameboard values with 1 and -1
    if (symbol === 'X'){
        gameBoard[cellArr.indexOf(cellHash)] = 1;
    } else {
        gameBoard[cellArr.indexOf(cellHash)] = -1;
    }
    console.log(gameBoard);
    //Check if a win condition has been achieved
    checkWin();
    // change curPlayer to be the other one.
    playerSwap(curPlayer);
}

//SWAP PLAYERS - swap players at the end of  
function playerSwap(a_currentP){
    if (a_currentP === playerOne){
        curPlayer = playerTwo;
    } else {
        curPlayer = playerOne;
    }
}

//CHECK WIN - compare gameboard to the win conditions
function checkWin() {
    let symbol = curPlayer === playerOne ? 'X' : 'O';

    checkWinCount += 1;
    console.log(checkWinCount);

    if (Math.abs(gameBoard[0] + gameBoard[1] + gameBoard[2]) === 3){
        gameWon = true; 
    } else if (Math.abs(gameBoard[3] + gameBoard[4] + gameBoard[5]) === 3){
        gameWon = true;  
    } else if(Math.abs(gameBoard[6] + gameBoard[7] + gameBoard[8]) === 3){
        gameWon = true;  
    } else if(Math.abs(gameBoard[0] + gameBoard[3] + gameBoard[6]) === 3){
        gameWon = true;
    } else if(Math.abs(gameBoard[1] + gameBoard[4] + gameBoard[7]) === 3){
        gameWon = true;
    } else if(Math.abs(gameBoard[2] + gameBoard[5] + gameBoard[8]) === 3){
        gameWon = true; 
    } else if(Math.abs(gameBoard[0] + gameBoard[4] + gameBoard[8]) === 3){
        gameWon = true;
    } else if(Math.abs(gameBoard[2] + gameBoard[4] + gameBoard[6]) === 3){
    } 

    if (gameWon){
        winner();
    } else if (checkWinCount === 9){
        drawMatch();
    }

    console.log("Winner not found");
}

//WINNER - run the winner function
function winner(){
    gameMode = false;
    $('.pop-up').html(curPlayer + " is victorious! <br><br> Press 'New Game' to play again");
    $('.pop-up').css("visibility", "visible");
};

function drawMatch(){
    $('.pop-up').html("It's a draw! <br><br> Press 'New Game' to play again");
    $('.pop-up').css("visibility", "visible");
}

// function mouseOver(cell){
//     let symbol = curPlayer === playerOne ? 'X' : 'O'; 
//     cell.html(symbol);
//     cell.css("color", "grey")    
// }

// function mouseOut(cell){
//     cell.html(" ");     
// }

//JQUERY - 
$('#new-game').click(function(){
    //we have clicked on the button for a new game
    $(".pop-up").css("visibility", "visible");
    $(".controls").css("visibility", "hidden");
    //then display the characters names on the board
});

$('#start-game').click(function(){
    let p1 = $('#player-one').val();
    let p2 = $('#player-two').val();
    //run a function to clear the board and assign new players names to the game
    startGame(p1, p2);
    //hide the name inputs
    $("input").css("display", "none");
    $("#vs").css("display", "block");
    $("#play1").html(p1 + ' (X)');
    $("#play2").html('(O) ' + p2);
    $(".pop-up").css("visibility", "hidden");
})

$('.cell').click(function() {
    if (gameMode){
    // we have clicked on the cell
    // get the dom element that we clicked on, and pass it to our "makeMove" function
    let theClickedCell = $(this);
    let cellID = $(this).attr('id');
    if (theClickedCell.html() === " "){
        makeMove(theClickedCell, cellID);
        }
    }
});

//query to preview the text in cell
// $('.cell').mouseover(function() {
//     if (gameMode){
//     let theClickedCell = $(this);
//     if (theClickedCell.html() === " "){
//         mouseOver(theClickedCell);
//         }
//     }
// });
// //query to preview the text in cell
// $('.cell').mouseout(function() {
//     if (gameMode){
//     let theClickedCell = $(this);
//         mouseOut(theClickedCell);
//     }
// });