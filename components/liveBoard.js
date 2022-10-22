export class Liveboard {
  constructor(scene, initialLives) {
    this.relatedScene = scene;
    this.lives = initialLives;
  }
  create() {
    this.livesText = this.relatedScene.add.text(26, 16, "Lives: " + this.lives, {
      fontFamily: "mario",
      shadow :'100%' ,
      fontSize: "20px",
      fill: "#200",
    });
  
  }
  decrementLive(live) {
    this.lives--;
    this.livesText.setText("Lives:" + this.lives);
  }
  incrementLive(live){
    this.lives++;
    this.livesText.setText("Lives:" + this.lives);
  }
}
