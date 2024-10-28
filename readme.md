# Dino Game with Infinite Play Mode

This project is a modified version of the classic Dino game, which allows for an infinite play mode. Players can enjoy uninterrupted gameplay without automatic game-over triggers. To end the game and update the high score, a manual command can be executed through the console.

## Features

- **Infinite Gameplay**: The game runs indefinitely, removing the usual game-over triggers, such as crashes.
- **Manual Game End Command**: Players can type a specific command in the console to end the game and update their high score.
- **High Score Update**: Upon manually ending the game, the high score is saved if the current score exceeds the previous high score.

## How It Works

1. **Infinite Play**: The game’s `gameOver` function has been modified to allow continuous play without stopping, even if the character crashes.
2. **Manual End**: A new function, `endGame()`, has been added. Players can call this function from the console to end the game and record their high score.

## Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/dino-game-infinite.git
   cd dino-game-infinite
   ```

2. Open the game in a browser and play as usual. The game will not end automatically upon crashes or obstacles.

3. To end the game manually and update the high score:
   - Open the browser console (usually accessible with `F12` or `Ctrl+Shift+I`).
   - Type the following command and press Enter:
     ```javascript
     endGame();
     ```
   - The game will display the game-over screen, and your high score will be saved.

## Code Overview

### Modified `gameOver` Function

The core modification lies within the `gameOver` function of the `Runner` class. The function is altered to only trigger game-over actions when called with a specific `endManually` flag. 

### `endGame` Function

A helper function `endGame()` has been introduced to handle manual ending. By calling this function in the console, the game can be ended on demand, allowing the game-over screen to display and the high score to update.

```javascript
function endGame() {
  Runner.instance_.gameOver(true); // Call with true to end manually
}
```

## Example Gameplay

1. Play the game continuously without interruptions.
2. Open the console and type `endGame();` to stop and update the score.

