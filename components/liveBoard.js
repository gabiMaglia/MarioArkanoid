export class Liveboard {
  constructor(scene) {
    this.relatedScene = scene;

  }
  create(lives) {
    localStorage.lives = lives
    this.lives = lives
    this.livesText = this.relatedScene.add.text(26, 16, "Lives: " + lives, {
      fontFamily: "mario",
      shadow :'100%' ,
      fontSize: "20px",
      fill: "#200",
    });
  
  }
  decrementLive(live) {
    this.lives -= live
    localStorage.lives = this.lives
    this.livesText.setText("Lives: " + parseInt(localStorage.lives));
    
  }
  incrementLive(live){
    this.lives += live;
    localStorage.lives = this.lives
    this.livesText.setText("Lives: " + parseInt(localStorage.lives));
  }

  get(){
    
    
    return parseInt(localStorage.lives)
  }
}
