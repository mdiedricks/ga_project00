## Purpose

This was my first assignment completed for my bootcamp at General Assembly. And it demonstrates my early expedition into the world of jQuery, HTML and CSS. 

The theme was an homage to games I played as a child, and speak to my enjoyment of the earlier development of video games and the accompanying style.


## Hosting and Development

The project is hosted via github pages.
Go have a play if you like!

## Available Scripts

The program is pretty simple comprising of a single html file, with an accompanying css and javscript file. 

### Functions

`newGame`

This sets the state of the game, resets the win counter and renames the players to default names.

`makeMove`

This checks if a cell already has a character stored in it. If the cell is free, it chekcs who the current player is, and assigns that players character to the cell.

`playerSwap` 

This checks who the current player is, and then reassigns the state value to the next player.

`checkWin`

Each time a move has been made, this checks the current state of the cell array and assesses whether the player who has just made the move has won.

`winner`

Once a winning array combination has been achieved, this ends the game, and displays the name of the winner.

`drawMatch`

If a draw array combination results, this ends the game announcing the draw.

`mouseOver`

This checks if a cell has a character in it, and if the cell is empty, displays a preview of the current players character in grey.

`mouseOut`

This remove the previewed character from the cell that the mouse was just over.