/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

// TODO: Update this gameboard by giving better naming (use A1, A2 etc insteaed of 1,2,3)
// 1,2,3 is very confusing and not sure which position it is denoting
let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    board[position] = mark.toUpperCase();

}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
    console.log('hi Game started: \n\n' +
    ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
    ' --------- \n' +
    ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
    ' --------- \n' +
    ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
 
}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    if (position <= 9 && position >= 1 && board[position]==' ') {
        return true;
    } else {
        return false
    }
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], 
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    const len = winCombinations.length;
    
    for (var i = 0; i < len; i++) {
        if (player === board[winCombinations[i][0]] && 
            player === board[winCombinations[i][1]] && 
            player === board[winCombinations[i][2]]){
             return true;
         }
        

    }
    return false;
}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    for (var i = 0; i < 9; i++) {
        if (board[i+1] === ' ') {
            return false;
       }
       
   }
   return true;
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc



function playTurn(player) {
    // # Get a input from the player

let move = prompt(player+"'s turn, input: ");
while (!validateMove(move)){
    console.log('Invalid input!, Input again');
    // # ask the user for input again

    move = prompt(player+"'s turn, input: ");
}
// # Return the validated move/position
return move
}

// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'


while (!winnerIdentified){
    
    // feel free to add logic here if needed, e.g. announcing winner or tie
    let move = playTurn(currentTurnPlayer);
        // console.log(move);
        
        // # mark 
        markBoard(move, currentTurnPlayer);
        printBoard();
        
        // # checkfull takes 0 inputs, call it and store the return value to isFull
        // const isFull = checkFull()
        
        // # checkWin takes 1 input, call it and store the return value to isWin
        
        
        IsWin = checkWin(currentTurnPlayer);
        if(IsWin){
            winnerIdentified = true;
            console.log(currentTurnPlayer+ " is the winner!!!")
            console.log ('Restart the game.')
            winnerIdentified = false; 
            board = {
                1: ' ', 2: ' ', 3: ' ',
                4: ' ', 5: ' ', 6: ' ',
                7: ' ', 8: ' ', 9: ' '
            };
            currentTurnPlayer = 'X';
        }



        
    IsFull = checkFull();
    if(IsFull){ 
        winnerIdentified = true;
        console.log('The Game Is Over. Is a tie game')
        console.log ('Restart the game.')
        winnerIdentified = false; 
        board = {
            1: ' ', 2: ' ', 3: ' ',
            4: ' ', 5: ' ', 6: ' ',
            7: ' ', 8: ' ', 9: ' '
        };
        currentTurnPlayer = 'X';
    } 
 
    


    if(currentTurnPlayer == 'X'){
        currentTurnPlayer = 'O'
    } else currentTurnPlayer = 'X'
    
        

    }  
    
 


// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
