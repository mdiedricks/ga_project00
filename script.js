//global variables
let winConditions = {
    win0 = [1,1,1,0,0,0,0,0,0],
    win1 = [0,0,0,1,1,1,0,0,0],
    win2 = [0,0,0,0,0,0,1,1,1],
    win3 = [1,0,0,1,0,0,1,0,0],
    win4 = [0,1,0,0,1,0,0,1,0],
    win5 = [0,0,1,0,0,1,0,0,1],
    win6 = [1,0,0,0,1,0,0,0,1],
    win7 = [0,0,1,0,1,0,1,0,0]
};

//new game function should start a new game object
const Game = function (player1, player2){
    this.fstPlayer = player1;
    this.secPlayer = player2;
    this.curPlayer = fstPlayer;
    
    // //create array values for the game board
    // this.gameBoard = [" "," "," "," "," "," "," "," "," "],
    // //make move on the game board
    // this.makeMove = function(input){
    //     //store active player in variable
    //     if (curPlayer === fstPlayer){
    //         let symbol ='X';
    //     }else {
    //         let symbol = 'O';
    //     }
    //     //select a location to place a symbol
    //     this.gameBoard[input] = symbol;
    //     return;
    // };
//     //function to check if a win combination is achieved
//     this.checkWin = function(arr){
//         let tempArr = arr;
//         if (curPlayer === fstPlayer){
//             for (i in tempArr){
//                 if (i === 'X'){
//                     arr[i] = 1;
//                 } else {
//                     arr[i] = 0;
//                 }
//             }
//         } else {
//             for (i in tempArr){
//                 if (i === 'O'){
//                     arr[i] = 1;
//                 } else {
//                     arr[i] = 0;
//                 }
//             }
//         }
//     }
// }

// //add a new player to the list
// function newPlayer(name){
//     players.push(name);
// }


//end game once game has been won
