import  BaseLevel  from "./baseLevel.js";
import { Cloud } from "../../components/clouds.js";


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
      .image("arkanoidlvl1", "../assets/images/levelScenes/level1/nArk.png")
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
        "../../assets/images/bricks/brick3Sprite.png",
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
    
    this.cloud1 = new Cloud(this);
    this.cloud2 = new Cloud(this)
    this.add.image(400, 150, "backgroundLvl1");
    
    this.levelBoard.create();
    this.scoreboard.create();
    this.liveBoard.create();
     
    this.bricks.createBrick1(113, 188)
    // this.bricks.createBrick2(113, 144)
    // this.bricks.createBrick3(112, 100)
    
    this.arkanoid.createArk(false, 'arkanoidlvl1');
    this.fireball.createFireball();
    
    this.coinAudio = this.sound.add("coin")
    this.coinAudio.volume = 0.05
    this.coinAudio.rate =1.5


    this.cloud1.createCloud(70, 404, 40);
    this.cloud2.createCloud(730, 300, -40);
  
    
   this.physics.add.collider(this.fireball.get(), this.arkanoid.get(), this.arkanoid.platformImpact, null, this);
   this.physics.add.collider(this.fireball.get(), this.cloud1.get(), this.cloud1.cloudImpact, null, this);
   this.physics.add.collider(this.fireball.get(), this.cloud2.get(), this.cloud2.cloudImpact, null, this)
  
   this.physics.add.collider(
    this.bricks.brick1Group,

    this.fireball.get(),
    this.bricks.brick1Impact,
    null,
    this
  );

  // this.physics.add.collider(
  //   this.bricks.brick2Group,

  //   this.fireball.get(),
  //   this.bricks.brick2Impact,
  //   null,
  //   this
  // );
  // this.physics.add.collider(
  //   this.bricks.brick3Group,

  //   this.fireball.get(),
  //   this.bricks.brick3Impact,
  //   null,
  //   this
  // );
  
  }

update() {
    super.update();
   
    

    if (this.cloud1.get().x > 270) {
      this.cloud1.get().setVelocityX(-40);
    } else if (this.cloud1.get().x < 70) {
      this.cloud1.get().setVelocityX(40);
    }

    if (this.cloud2.get().x < 530) {
      this.cloud2.get().setVelocityX(40);
    } else if (this.cloud2.get().x > 730) {
      this.cloud2.get().setVelocityX(-40);
    }

      
      
      
  }
  

 


}


