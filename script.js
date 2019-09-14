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
let holderArr = [" "," "," "," "," "," "," "," "," "]
let curPlayer = '';
let playerOne = '';
let playerTwo = '';

//NEW GAME - create game board
function newGame (player1, player2) {
    //engage game mode
    gameMode = true;
    //assign player names to global variables
    playerOne = player1;
    playerTwo = player2;
    //reset player 1 to be current player
    curPlayer = playerOne;

    //T0-DO: assign values to html divs on screen

    //create array values for the game board
    gameBoard = [" "," "," "," "," "," "," "," "," "];


    //assign gameBoard values to values in html divs
    for (i = 0; i < cellArr.length; i++){
         $(celArr[i]).html(gameboard[i])
    }

    $('#topLeft').html(gameBoard[0]);
    $('#topMid').html(gameBoard[1]);
    $('#topRight').html(gameBoard[2]);
    $('#cenLeft').html(gameBoard[3]);
    $('#cenMid').html(gameBoard[4]);
    $('#cenRight').html(gameBoard[5]);
    $('#botLeft').html(gameBoard[6]);
    $('#botMid').html(gameBoard[7]);
    $('#botRight').html(gameBoard[8]);
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
    holderArr[cellArr.indexOf(cellHash)] = symbol;    
    console.log('The holder array is: ' + holderArr);
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
    let tempArr = [];
    //convert tempArr holder to 1s and 0s
    if (curPlayer === playerOne){
        for (i in holderArr){
            if (i === 'X'){
                tempArr.push(1);
            } else {
                tempArr.push(0);
            }
        }
    } else {
        for (i in holderArr){
            if (i === 'O'){
                tempArr.push(1);
            } else {
                tempArr.push(0);
            }
        }
    };
 
    console.log('The temporary array is: ' + tempArr);

    //check tempArr against win conditions arrays
    for (i in winConditions){
        if (tempArr === winConditions[i]){
            console.log("Winner!")
            gameMode = false;
            winner();
        }
    };
}

//WINNER - run the winner function
function winner(){
    console.log(curPlayer + " is the winner!")
    $('.winPlayer').html(curPlayer);
    $('.winner').show();
};

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