//global variables
let players = [];


//new game function should start a new game object
const NewGame = function (player1, player2){
    this.fstPlayer = player1;
    this.secPlayer = player2;
    this.curPlayer = fstPlayer;
    this.winConditions = function {
        console.log("win conditions"); // array for all win conditions
    };
    //create array values for the game board
    this.gameBoard = [" "," "," "," "," "," "," "," "," "],
    //make move on the game board
    this.makeMove = function(input){
        //store active player in variable
        if (curPlayer === fstPlayer){
            let symbol ='X';
        }else {
            let symbol = 'O';
        }
        //select a location to place a symbol
        this.gameBoard[input] = symbol;
        return;
    };
    this.checkWin = function(){

    }
}

//add a new player to the list
function newPlayer(name){
    players.push(name);
}


//end game once game has been won

