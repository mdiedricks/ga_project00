//new game function should start a new game object
const NewGame = function (player1, player2){
    this.fstPlayer = player1;
    this.secPlayer = player2;
    this.curPlayer = fstPlayer;
    //change active player after a symbol has been placed
    this.swapPlayer = function(){
        if (curPlayer === fstPlayer){
            curPlayer = secPlayer;
        } else{
            curPlayer = fstPlayer;
        }
    },
    this.
}

//add a new player to the list
function newPlayer(name, ){
    let 
}

//choose player names for X and O
function selPlayers(playerX, playerO){
    console.log(player1);
}

//place a symbol in a grid cell
function makeMove(curPlayer, input){
    console.log(curPlayer);
}

//check if somebody has won, after each move has been made


//end game once game has been won

