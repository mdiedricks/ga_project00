//global variables
let players = [];

//new game function should start a new game object
const NewGame = function (player1, player2){
    this.fstPlayer = player1,
    this.secPlayer = player2,
    this.curPlayer = fstPlayer,
    this.winConditions = {
        return; // array for all win conditions
    },
    //create array values for the game board
    this.gameBoard = [" "," "," "," "," "," "," "," "," "],
    //make move on the game board
    this.makeMove(input){
        return;
    },
    //change active player after a symbol has been placed
    this.swapPlayer = function(){
        if (curPlayer === fstPlayer){
            curPlayer = secPlayer;
        } else{
            curPlayer = fstPlayer;
        }
    },
    //check if somebody has won the game
    this.checkWin(){
        return;
    }
}

//add a new player to the list
function newPlayer(name){
    players.push(name);
}

//place a symbol in a grid cell
function makeMove(curPlayer, input){
    console.log(curPlayer);
}

//end game once game has been won

