import { RestartBtn } from '/../components/restartBtn.js'

export default class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: "GameOver" });
        this.restartBtn = new RestartBtn(this);
      }

      preload () {
        this.load.image("gameOver", "../../assets/images/gameOverScene/gameOverRed.png");
        this.restartBtn.preload();

      }
      create () {

        this.cameras.main.fadeIn(400, 0, 0, 0)
        this.restartBtn.create();
        this.gameOver = this.add.image(400, 92, "gameOver");
        this.gameOver.visible = true;
      }  
}