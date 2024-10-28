Runner.prototype.gameOver = function(endManually = false) {
  if (!endManually) {
    // The game continues indefinitely
    return;
  }

  // Play the game-over sound, set game state to crashed, etc.
  this.playSound(this.soundFx.HIT);
  vibrate(200);

  this.stop();
  this.crashed = true;
  this.distanceMeter.achievement = false;
  this.tRex.update(100, Trex.status.CRASHED);

  // Show game-over panel and update high score
  if (!this.gameOverPanel) {
    const origSpriteDef = IS_HIDPI ? spriteDefinitionByType.original.HDPI :
                                     spriteDefinitionByType.original.LDPI;
    if (this.canvas) {
      if (Runner.isAltGameModeEnabled) {
        this.gameOverPanel = new GameOverPanel(
          this.canvas, origSpriteDef.TEXT_SPRITE, origSpriteDef.RESTART,
          this.dimensions, origSpriteDef.ALT_GAME_END, this.altGameModeActive
        );
      } else {
        this.gameOverPanel = new GameOverPanel(
          this.canvas, origSpriteDef.TEXT_SPRITE, origSpriteDef.RESTART,
          this.dimensions
        );
      }
    }
  }

  this.gameOverPanel.draw(this.altGameModeActive, this.tRex);

  // Update the high score if applicable
  if (this.distanceRan > this.highestScore) {
    this.saveHighScore(this.distanceRan);
  }

  // Additional ending actions
  this.time = getTimeStamp();

  if (Runner.audioCues) {
    this.generatedSoundFx.stopAll();
    announcePhrase(
      getA11yString(A11Y_STRINGS.gameOver).replace(
        '$1', this.distanceMeter.getActualDistance(this.distanceRan).toString()
      ) + ' ' + getA11yString(A11Y_STRINGS.highScore).replace(
        '$1', this.distanceMeter.getActualDistance(this.highestScore).toString()
      )
    );
    this.containerEl.setAttribute(
      'title', getA11yString(A11Y_STRINGS.ariaLabel)
    );
  }
  this.showSpeedToggle();
  this.disableSpeedToggle(false);
};

// Add a manual function to end the game
function endGame() {
  Runner.instance_.gameOver(true); // Call with true to end manually
}


// To end the game run endGame(); in the console. The default  param is true due to the scope and body;
