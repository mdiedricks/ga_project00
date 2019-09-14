//global variables
let highscores = [];

//in game variables
let winConditions = [
    [1,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,1,1],
    [1,0,0,1,0,0,1,0,0],
    [0,1,0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0,0,1],
    [1,0,0,0,1,0,0,0,1],
    [0,0,1,0,1,0,1,0,0]
];
let gameMode = false;
let gameBoard = [];
let cellArr = ['#topLeft','#topMid','#topRight','#cenLeft','#cenMid','#cenRight','#botLeft','#botMid','#botRight']
//let holderArr = [" "," "," "," "," "," "," "," "," "]
let curPlayer = '';
let playerOne = 'Player X';
let playerTwo = 'Player O';
let checkWinCount = 9;

//NEW GAME - create game board
function newGame (player1, player2) {
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
    //TO-DO: assign symbol to holder array for win check
    gameBoard[cellArr.indexOf(cellHash)] = symbol;    
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
    /*
        use map to convert a game board state
        based on the current player symbol
        [ 'X', 'O', ' ', ' ', ' ', ' ', ' ' , ' ' , ' ' ];
        [ 1,   0,   0,   0,   0,   0,   0,    0,    0]
    */

    let tempArr2 = gameBoard.map(function(value) {
        return symbol === value ? 1 : 0;
    });
    
    //check tempArr against win conditions arrays
    for (i in winConditions){    
        if(JSON.stringify(tempArr2) === JSON.stringify(winConditions[i])){
            gameMode = false;
            winner();
        }
    };
    checkWinCount += 1;
    console.log(checkWinCount);
    if (checkWinCount === 9){
        drawMatch();
        console.log("It's a draw!")
    }
}

//WINNER - run the winner function
function winner(){
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
    let p1 = $('#player-one').val();
    let p2 = $('#player-two').val();
    //run a function to clear the board and assign new players names to the game
    newGame(p1, p2);
    //hide the name inputs
    $("input").css("display", "none");
    $("#vs").css("display", "block");
    $("#play1").html(p1 + ' (X)');
    $("#play2").html('(O) ' + p2);
    $(".pop-up").css("visibility", "hidden");
    //then display the characters names on the board
});

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