import  BaseLevel  from "./baseLevel.js";
import { Cloud } from "../../components/clouds.js";

export class Level2 extends BaseLevel {
    constructor(scene) {
        super({ key: "Level2" });
        this.level = 2
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
        "backgroundLvl2",
        "../assets/images/levelScenes/level2/backGroundLVL2.png"
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
    this.cloud = new Cloud(this);

    this.cameras.main.fadeIn(600, 10, 0, 0);
    
    
    this.add.image(400, 150, "backgroundLvl2");
    
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
    this.coinAudio.rate = 1.5
    
    this.cloud1Group = this.cloud.createTopGroup1 ()
    this.cloud2Group = this.cloud.createTopGroup2 ()
    this.cloud3Group = this.cloud.createTopGroup3 ()
    

   
  
    
   this.physics.add.collider(this.fireball.get(), this.arkanoid.get(), this.arkanoid.platformImpact, null, this);
   this.physics.add.collider(this.fireball.get(), this.cloud.getGroup1(), this.cloud.cloudImpact, null, this) 
   this.physics.add.collider(this.fireball.get(), this.cloud.getGroup2(), this.cloud.cloudImpact, null, this)
   this.physics.add.collider(this.fireball.get(), this.cloud.getGroup3(), this.cloud.cloudImpact, null, this)
   

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
   
    


      
      
      
  }
  

 


}


