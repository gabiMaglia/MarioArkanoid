import { Bricks } from "../../components/bricks.js";
import { Scoreboard } from "../../components/scoreBoard.js";
import { Liveboard } from "../../components/liveboard.js";
import { LevelBoard } from "../../components/LevelBoard.js";
import { Arkanoid } from "../../components/arkanoid.js";
import { Fireball } from "../../components/fireball.js";
import { Coins } from "../../components/PowerUps/coins.js";
const INITIAL_LIVES = 3;

export default class BaseLevel extends Phaser.Scene  {


  init() {
    this.bricks = new Bricks(this);
    this.arkanoid = new Arkanoid(this);
    this.scoreboard = new Scoreboard(this);
    this.levelBoard = new LevelBoard(this, this.level);
    this.liveBoard = new Liveboard(this, INITIAL_LIVES);
    this.fireball = new Fireball(this);
    this.coin = new Coins(this);
    
    this.physics.world.setBoundsCollision(true, true, true, false);
    this.teclas = this.input.keyboard.createCursorKeys();
  }

  // isPhaseFinished() {
  //   return this.brick1Group.countActive() === 0;
  // }

  update() {
    this.arkanoid.arkMove(this.teclas, this.fireball, this.arkanoid);
    
    
    if (this.coin) {
      this.coin = new Coins(this);  
    }
    
    if (this.fireball.fireballLost()) {
      this.liveBoard.decrementLive(1);

      if (this.liveBoard.lives < 1) {
        //  this.gameOverLastLive.play()
        this.scene.start("GameOver");
      } else {
        // this.fireballLostSound.play()
        this.fireball.get().visible = false;
        this.scene.pause();

        setTimeout(() => {
          (this.fireball.get().visible = true), this.scene.resume();

          this.fireball.get().setY(this.arkanoid.get().body.position.y - 15);
          this.fireball.get().setX(this.arkanoid.get().body.position.x + 75);
          this.fireball.get().setVelocity(0);
          this.fireball.setGlue();
        }, 950);
      }
    }
  }
}
