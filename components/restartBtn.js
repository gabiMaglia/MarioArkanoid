export class RestartBtn {
  constructor(scene) {
    this.relatedScene = scene;
  }

  preload() {
    this.relatedScene.load.image(
      "marioSelector",
      "../assets/images/startScene/capeMarioSelector.png"
    );

    this.relatedScene.load.audio("coin", "../assets/sounds/coin.mp3");
  }

  create() {
    this.coinSound = this.relatedScene.sound.add("coin");
    this.coinSound.volume = 0.1;

    this.buttn = this.relatedScene.add
      .sprite(240, 320, "marioSelector")
      .setInteractive();
    this.buttn.setSize(0.1);

    this.restartText = this.relatedScene.add
      .text(290, 320, "RESTART LAST LEVEL!", {
        fontFamily: "mario",
        fontSize: "20px",
        fill: "#740",
      })
      .setInteractive();

    this.quitText = this.relatedScene.add
      .text(290, 270, "RETURN TO MAIN :(", {
        fontFamily: "mario",
        fontSize: "20px",
        fill: "#740",
      })
      .setInteractive();

    this.restartText.on("pointerover", () => {
      this.buttn.y = 320;
    });
    this.quitText.on("pointerover", () => {
      this.buttn.y = 270;
    });

    this.restartText.on("pointerdown", () => {
      this.coinSound.play();

      this.relatedScene.scene.start('Level'+ parseInt(localStorage.level));
        localStorage.lives = 3
        localStorage.score -= 50
      
      this.relatedScene.cameras.main.fadeOut(400, 0, 0, 0);
    });

    this.quitText.on("pointerdown", () => {
      this.coinSound.play();
      this.relatedScene.scene.start("StartScene");
      this.relatedScene.cameras.main.fadeOut(500, 0, 0, 0);
    });
  }
}
