# Psychic-Game
A word guessing game built using Javascript.




The purpose of this game is to have the user guess the random A-Z letter that the computer generates
<!-- (make sure to note LOWERCASE only) -->
The user will have 7 guesses to find the letter
The computer will keep track of games won and games lost without refreshing
computer will collect user input of guessed letters and display on street throughout game



Random letter generator
	create a string of all alphabet letters
	convert to lowercase
	use random letter variable and mathfloor function to 
	


Guessing - user will input a letter


If wrong:
		letter will appear in Guesses So Far on screen for remainder of round
		-1 to Guesses Left

	If all 7 guesses are exhausted to 0
		+1 added to Losses
		Guesses left will reset to 7
		letters on screen will be cleared (without refresh)
		
		
If correct:
		+1 will be added to wins
		Guesses left will reset to 7
		letters on screen will be cleared (without refresh)
		
