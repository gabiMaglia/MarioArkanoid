import  BaseLevel  from "./baseLevel.js";
import { Cloud } from "../../components/clouds.js";
const LEVEL = 1

export class Level1 extends BaseLevel {
  constructor(scene) {
    super({ key: "Level1" });
    this.level = 1
  }
   
    preload() {


      this.load.spritesheet(
        "coin",
        "../assets/images/extra/coin.png",
        {
          frameWidth: 172,
          frameHeight: 221,
        }
      );

    this.load
      .image(
        "backgroundLvl1",
        "../assets/images/levelScenes/level1/backGroundLVL1.png"
      )
      .image("arkanoid", "../assets/images/levelScenes/level1/nArk.png")
      .spritesheet(
        "fireball",
        "../assets/images/levelScenes/level1/fireball.png",
        {
          frameWidth: 18,
          frameHeight: 20,
        }
      )
      .image("brick1", "../assets/images/bricks/brick1.png")
      .image("brick2", "../assets/images/bricks/brick2.png")
      .image("brick3P", "../assets/images/bricks/brick3simple.png")
      .image("brick4P", "../assets/images/bricks/brick4simple.png")
      .spritesheet(
        "brick3Sprite",
        "../../assets/images/bricks/brick4Sprite.png",
        {
          frameWidth: 59,
          frameHeight: 38,
        }
      )

      .image('1Up', '../assets/images/PowerUps/1Up.png')
      .image('bigUp', '../assets/images/PowerUps/bigUp.png')
      .audio('coin', '../assets/sounds/coin.mp3')

      .image("cloud", "../assets/images/levelScenes/level1/cloudLVL1.png")
      
      .audio("ballLost", "../assets/sounds/ballLost.mp3");
  }

  create() {
    this.cameras.main.fadeIn(600, 10, 0, 0);
    
    this.cloud = new Cloud(this);
    this.add.image(400, 150, "backgroundLvl1");
    
    this.levelBoard.create();
    this.scoreboard.create();
    this.liveBoard.create();
     
    this.bricks.createBrick1(113, 188)
    this.bricks.createBrick2(113, 144)
    this.bricks.createBrick3(112, 100)
    
    this.arkanoid.createArk();
    this.fireball.createFireball();
    
    this.coinAudio = this.sound.add("coin")
    this.coinAudio.volume = 0.05
    this.coinAudio.rate =1.5


    this.cloud1 = this.cloud.createCloud1(70, 404);
    this.cloud2 = this.cloud.createCloud2(730, 300);
  
    
   this.physics.add.collider(this.fireball.get(), this.arkanoid.get(), this.arkanoid.platformImpact, null, this);
   this.physics.add.collider(this.fireball.get(), this.cloud.get(), this.cloud.cloudImpact, null, this);
   this.physics.add.collider(this.fireball.get(), this.cloud.get1(), this.cloud.cloudImpact, null, this)
  
   this.physics.add.collider(
    this.bricks.brick1Group,

    this.fireball.get(),
    this.bricks.brick1Impact,
    null,
    this
  );

  this.physics.add.collider(
    this.bricks.brick2Group,

    this.fireball.get(),
    this.bricks.brick2Impact,
    null,
    this
  );
  this.physics.add.collider(
    this.bricks.brick3Group,

    this.fireball.get(),
    this.bricks.brick3Impact,
    null,
    this
  );
  
  }

update() {
    super.update();
   
    

    if (this.cloud.cloud1.x > 270) {
      this.cloud.cloud1.setVelocityX(-40);
    } else if (this.cloud.cloud1.x < 70) {
      this.cloud.cloud1.setVelocityX(40);
    }

    if (this.cloud.cloud2.x < 530) {
      this.cloud.cloud2.setVelocityX(40);
    } else if (this.cloud.cloud2.x > 730) {
      this.cloud.cloud2.setVelocityX(-40);
    }

      
      
      
  }
  

 


}


