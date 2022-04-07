import  BaseLevel  from "./baseLevel.js";
import { Cloud } from "../../components/clouds.js";
import { CanonBall } from "../../components/canonBalls.js"
import { Bullet } from "../../components/bullets.js";
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
      .image(
        "canonball",
        "../assets/images/levelScenes/level2/canonball.png"
      )
      .image(
        "bullet",
        "../assets/images/levelScenes/level2/bullet.png"
      )
      .image("arkanoidlvl2", "../assets/images/levelScenes/level2/level2Ark.png")
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
    this.cloud = new Cloud(this);
    this.canonball = new CanonBall(this)
    
    this.bullet1 = new Bullet(this)
    this.bullet2 = new Bullet(this)
      
      
    this.cameras.main.fadeIn(600, 10, 0, 0);
    
    
    this.add.image(400, 150, "backgroundLvl2");
    
    this.levelBoard.create();
    this.scoreboard.create();
    this.liveBoard.create();
    
    this.bricks.createBrick1(106, 188)
    this.bricks.createBrick2(106, 144)
    this.bricks.createBrick3(106, 100)
    
    
    this.arkanoid.createArk(true, 'arkanoidlvl2');

    this.arkanoid.get().setScale(0.1)
    this.arkanoid.get().alpha = 0.85
    
    this.fireball.createFireball();
    
    
    
    this.coinAudio = this.sound.add("coin")
    this.coinAudio.volume = 0.05
    this.coinAudio.rate = 1.5
    
    
    
    this.cloud1Group = this.cloud.createTopGroup1 ()
    this.cloud2Group = this.cloud.createTopGroup2 ()
    this.cloud3Group = this.cloud.createTopGroup3 ()

  
    this.bullet1.createBullet(770, 260, false, -100)
    this.bullet2.createBullet(27, 380, true, 100)
    
    this.canonball.createCannonBall(27, 380, false)
    this.canonball.createCannonBall(772, 260, true)
    
    
  
    
   this.physics.add.collider(this.fireball.get(), this.arkanoid.get(), this.arkanoid.platformImpact, null, this);
   this.physics.add.collider(this.fireball.get(), this.cloud.getGroup1(), this.cloud.cloudImpact, null, this) 
   this.physics.add.collider(this.fireball.get(), this.cloud.getGroup2(), this.cloud.cloudImpact, null, this)
   this.physics.add.collider(this.fireball.get(), this.cloud.getGroup3(), this.cloud.cloudImpact, null, this)
   
   this.physics.add.collider(this.fireball.get(), this.bullet1.getBullet(), this.bullet1.bulletImpact, null, this) 
   this.physics.add.collider(this.fireball.get(), this.bullet2.getBullet(), this.bullet2.bulletImpact, null, this) 
   
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
 
  
    if(this.bullet1.bullet.x < -522 || this.bullet1.bullet.y > 580){
      this.bullet1.getBullet().disableBody(true, true);
      this.bullet1 =  new Bullet(this)
      this.bullet1.createBullet(770, 260, false, -100)
      this.physics.add.collider(this.fireball.get(), this.bullet1.getBullet(), this.bullet1.bulletImpact, null, this) 
    }
    
    if(this.bullet2.bullet.x > 1322 || this.bullet2.bullet.y > 580){
      this.bullet2.getBullet().disableBody(true, true);
      this.bullet2 = new Bullet(this)
      this.bullet2.createBullet(27, 380, true, 100)
      this.physics.add.collider(this.fireball.get(), this.bullet2.getBullet(), this.bullet2.bulletImpact, null, this) 
      
    }     
  }
  

 


}


