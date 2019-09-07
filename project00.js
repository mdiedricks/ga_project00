//global variables
let players = [];

//new game function should start a new game object
const Game = function (player1, player2){
    this.fstPlayer = player1;
    this.secPlayer = player2;
    this.curPlayer = fstPlayer;
    this.winConditions = function {
        let win0 = [1,1,1,0,0,0,0,0,0],
        let win1 = [0,0,0,1,1,1,0,0,0],
        let win2 = [0,0,0,0,0,0,1,1,1],
        let win3 = [1,0,0,1,0,0,1,0,0],
        let win4 = [0,1,0,0,1,0,0,1,0],
        let win5 = [0,0,1,0,0,1,0,0,1],
        let win6 = [1,0,0,0,1,0,0,0,1],
        let win7 = [0,0,1,0,1,0,1,0,0]
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
    this.checkWin = function(arr){
        let tempArr = arr;
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
}

//add a new player to the list
function newPlayer(name){
    players.push(name);
}


//end game once game has been won

