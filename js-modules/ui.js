export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Helvetica";
  }
  draw(context) {
    context.save();
    context.shadowOffsetX = 1;
    context.shadowOffsetY = 1;
    context.shadowColor = 'black';
    context.shadowBlur = 0;

    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;

    // score
    context.fillText("Score: " + this.game.score, 20, 60);
    // timer
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 100);

    // game over message
    if (this.game.gameOver) {
      context.textAlign = "center";
      if(this.game.score > 200) {
        context.font = this.fontSize * 2 + "px " + this.fontFamily;
        context.fillText(
          "Victory !!!",
          this.game.width * 0.5,
          this.game.height * 0.5 - 20
        );

        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillText(
          "Night creatures ran away from you.",
          this.game.width * 0.5,
          this.game.height * 0.5 + 20
        );
      } else {
        context.font = this.fontSize * 2 + "px " + this.fontFamily;
        context.fillText(
          "Missed this time",
          this.game.width * 0.5,
          this.game.height * 0.5 - 20
        );

        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillText(
          "Better Luck for the next time",
          this.game.width * 0.5,
          this.game.height * 0.5 + 20
        ); 
      }
    }
    context.restore();

  }
}
