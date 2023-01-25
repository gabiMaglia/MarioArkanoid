export class Scoreboard {
  constructor(scene) {
    this.relatedScene = scene;
    this.scoreForLifeCounter = 0
  }

  create(points) {
    this.score = points;
    this.scoreText = this.relatedScene.add.text(646, 16, "Score: " + points, {
      fontFamily: "mario",
      fontSize: "20px",
      fill: "#200",
    });
  }
  incrementPoint(points) {
    this.score += points;
    localStorage.score = this.score;
    this.scoreText.setText("Score: " + parseInt(localStorage.score));
    if (this.score > (this.scoreForLifeCounter + 400)) {
      this.scoreForLifeCounter = this.score
      this.relatedScene.liveBoard.incrementLive(1);
    }
  }

  get() {
    return parseInt(localStorage.score);
  }
}
