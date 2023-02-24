# Breakout
Using the [MDN Breakout Tutorial](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript), the game was created using Vanilla Javascript before being refactored into classes and then refactored again into TypeScript.

# Stretch Challenges
## Colour Randomisation
I created two functions outside of the Game class to allow for the randomization of colours - one for the lighter end of the spectrum, one on the darker so that each time a new game object is generated, the colour scheme changes. I decided to break the functions into two to ensure the background of the game will always be lighter than the sprites placed on top. 

These functions were sourced from Stack Overflow: https://stackoverflow.com/questions/23601792/get-only-light-colors-randomly-using-javascript

Additionally:
- The ball changes colour whenever it hits a brick.
- When the ball hits the paddle, it turns red.

## Increased Difficulty of Gameplay
Whenever the player hits the ball with the paddle, the ball speed increases slightly. So the more times you successfully hit the ball, the harder the game gets. 

NOTE for future development: if you keep managing to hit the ball, the increased speed eventually is too fast for the game, and the ball is stuck at the bottom of the screen. Would need to add in a condition for a maximum speed.

## Start, Game Over and Victory Screens
I wanted the game to have a more professional feel so I added in functionality for start, game over and victory screens which prompt the user as to whether they would like to play again.

The implementation for this was sourced from David Reid on YouTube: https://www.youtube.com/watch?v=9sMau0ZPW5A with some tweaks to pull the event listeners into the app.js module.

# Screenshots
## Gameplay
<img width="1031" alt="Screenshot 2023-02-02 at 10 59 43 AM" src="https://user-images.githubusercontent.com/33559193/216428840-e02df2e1-2be7-4cf8-be87-8b2a8ff4f0b0.png">

## Start Screen
<img width="1064" alt="Screenshot 2023-02-02 at 10 59 55 AM" src="https://user-images.githubusercontent.com/33559193/216428899-0c10a57e-3101-4e31-85ce-3830770f9dd7.png">
