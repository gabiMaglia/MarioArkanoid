import  BaseLevel  from "./baseLevel.js";
import { FireTraps } from "../../components/fireTraps.js"


export class Level3 extends BaseLevel {
    constructor(scene) {
        super({ key: "Level3" });
        this.level = 3
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
        "backgroundLvl3",
        "../assets/images/levelScenes/level3/backGroundLVL3.gif"
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
      .image('fireTrap','../assets/images/levelScenes/level3/lvl3firetrap.png')
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
      .spritesheet(
        "brick4Sprite",
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
    
    
    this.add.image(400, 200, "backgroundLvl3");
    
    this.levelBoard.create();
    this.scoreboard.create();
    this.liveBoard.create();
     
    this.bricks.createBrick1(106, 232)
    // this.bricks.createBrick2(106, 188)
    // this.bricks.createBrick3(106, 144)
    // this.bricks.createBrick4(106, 100)
    
    this.arkanoid.createArk(false, 'arkanoid');
    this.fireball.createFireball();
    
    
    
    this.coinAudio = this.sound.add("coin")
    this.coinAudio.volume = 0.05
    this.coinAudio.rate = 1.5
    
    
    this.fireTraps1 = new FireTraps(this);
    this.fireTraps2 = new FireTraps(this);

    this.fireTraps1.createFireTrap(120, 320)
    this.fireTraps2.createFireTrap(655, 370)
    console.log(this.fireTraps1.fireTrap.body);

    this.physics.add.collider(this.fireball.get(), this.fireTraps1.getFireTraps())
    this.physics.add.collider(this.fireball.get(), this.fireTraps2.getFireTraps())
    
    this.physics.add.collider(this.fireball.get(), this.arkanoid.get(), this.arkanoid.platformImpact, null, this);
   
   

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

  // this.physics.add.collider(
  //   this.bricks.brick4Group,

  //   this.fireball.get(),
  //   this.bricks.brick4Impact,
  //   null,
  //   this
  // );
  
}

update() {
  super.update();
  
  
      
      
  }
  

 


}

