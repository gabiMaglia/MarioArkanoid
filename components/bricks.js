export class Bricks {
  constructor(scene) {
    this.relatedScene = scene;
    this.relatedScene.brick1GroupFinished = true
    this.relatedScene.brick2GroupFinished = true
    this.relatedScene.brick3GroupFinished = true
    this.relatedScene.brick4GroupFinished = true
  }
  

  isPhaseFinished() {
    if( this.relatedScene.brick1GroupFinished == true &&
        this.relatedScene.brick2GroupFinished == true &&
        this.relatedScene.brick3GroupFinished == true &&
        this.relatedScene.brick4GroupFinished == true
      ) {
        return true
      }
  }

  createParticle(key, x, y){
    const p1 = this.relatedScene.add.particles(key)
    
    const e = p1.createEmitter({
       scale: 0.3,             
       lifespan: 900,   
      // **physics**
       speed: 100 ,               
       gravityY: 300,
      // **custom particle**
      particleClass: Phaser.GameObjects.Particles.Particle,
       frequency: 20,    
       quantity: 1,      
       maxParticles: 5,
       reserve: 0.5,
       rotate: Math.round(Math.random()*10.3),
       timeScale: 1.2,
  });
    e.setPosition(x, y)
  }

  createBrick1(x, y) {
    this.relatedScene.brick1GroupFinished = false
    //creamos el grupo de bricks
    this.brick1Group = this.relatedScene.physics.add.staticGroup({
      key: "brick1",
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 65.9,
        cellHeight: 44,
        x: x, //113
        y: y, //232
      },
    });

    this.brick1Group.getChildren().forEach(function (bricks) {
      bricks.live = 1;
    }, this);
  }

  createBrick2(x, y) {
    this.relatedScene.brick2GroupFinished = false
    this.brick2Group = this.relatedScene.physics.add.staticGroup({
      key: "brick2",
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 65.9,
        cellHeight: 44,
        x: x, // 113
        y: y, // 188
      },
    });
    this.brick2Group.getChildren().forEach(function (bricks) {
      bricks.live = 1;
    }, this);
  }
 
  createBrick3(x, y) {
    this.relatedScene.brick3GroupFinished = false
    this.brick3Group = this.relatedScene.physics.add.staticGroup({
      key: "brick3Sprite",
      frames: [0, 1],
      frame: 1,
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 66,
        cellHeight: 44,
        x: x, //112
        y: y, //100
      },
    });
    this.brick3Group.getChildren().forEach(function (bricks) {
      bricks.live = 2;
    }, this);
  }

  createBrick4(x, y) {
    this.relatedScene.brick4GroupFinished = false
    this.brick4Group = this.relatedScene.physics.add.staticGroup({
      key: "brick4Sprite",
      frames: [0, 1, 2],
      frame: 2,
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 66,
        cellHeight: 44,
        x: x, //112
        y: y, //144
      },
    });
    this.brick4Group.getChildren().forEach(function (bricks) {
      bricks.live = 3;
    }, this);
  }

  brick1Impact(fireball, bricks) {
    bricks.y -= 3;
    bricks.live = bricks.live - 1;
    setTimeout(() => {
      bricks.y += 3;
    }, 100);
    if (bricks.live == 0) {
      this.bricks.createParticle('brick1', bricks.x, bricks.y)
      
      let probability = Math.floor((Math.random() * 10) / 2);
      if (probability > 1) {
        this.coin = this.coin.createCoin(bricks.x, bricks.y);
        this.coinAudio.play();
        this.scoreboard.incrementPoint(50);
      }
      //  this.brickBreackSound.play();
      bricks.disableBody(true, true);
      this.scoreboard.incrementPoint(10);
     
     
      if (this.bricks.brick1Group.countActive() == 0) {
        this.brick1GroupFinished = true
      }
      if (this.bricks.isPhaseFinished()){
        console.log('you win motherfucker')
      }
     
      
     
    }
  }

  brick2Impact(fireball, bricks) {
    bricks.y -= 3;
    bricks.live = bricks.live - 1;
    setTimeout(() => {
      bricks.y += 3;
    }, 100);
    if (bricks.live == 0) {
      this.bricks.createParticle('brick2', bricks.x, bricks.y)

      let probability = Math.floor((Math.random() * 10) / 2);
      if (probability > 1) {
        this.coin = this.coin.createCoin(bricks.x, bricks.y);
        this.coinAudio.play();
        this.scoreboard.incrementPoint(50);
      }
      bricks.disableBody(true, true);
      this.scoreboard.incrementPoint(10);
      //this.brickBreackSound.play();
     
      if (this.bricks.brick2Group.countActive() == 0) {
        this.brick2GroupFinished = true
      }
      if (this.bricks.isPhaseFinished()){
        console.log('you win motherfucker')
      }
     
    }
  }

  brick3Impact(fireball, bricks) {
    bricks.y -= 3;
    bricks.live = bricks.live - 1;
    setTimeout(() => {
      bricks.y += 3;
    }, 100);
    bricks.setFrame(bricks.frame.name - 1);

    if (bricks.live == 0) {
      this.bricks.createParticle('brick3P', bricks.x, bricks.y)

      let probability = Math.floor((Math.random() * 10) / 2);
      if (probability > 1) {
        this.coin = this.coin.createCoin(bricks.x, bricks.y);
        this.coinAudio.play();
        this.scoreboard.incrementPoint(50);
      }
      bricks.disableBody(true, true);
      this.scoreboard.incrementPoint(30);
     
      if (this.bricks.brick3Group.countActive() == 0) {
        this.brick3GroupFinished = true
      }
 
      if (this.bricks.isPhaseFinished()) {
        console.log('you win motherfucker')
      }
      //this.brickBreackSound.play();
    }
  }

  brick4Impact(fireball, bricks) {
    bricks.y -= 3;
    bricks.live = bricks.live - 1;
    setTimeout(() => {
      bricks.y += 3;
    }, 100);
    bricks.setFrame(bricks.frame.name - 1);

    if (bricks.live == 0) {
      this.bricks.createParticle('brick4P', bricks.x, bricks.y)
      let probability = Math.floor((Math.random() * 10) / 2);
      if (probability > 1) {
        this.coin = this.coin.createCoin(bricks.x, bricks.y);
        this.coinAudio.play();
        this.scoreboard.incrementPoint(50);
      }
      bricks.disableBody(true, true);
      this.scoreboard.incrementPoint(40);
     
      if (this.bricks.brick4Group.countActive() == 0) {
        this.brick4GroupFinished = true
      }
     
      if (this.bricks.isPhaseFinished()) {
        
        console.log('you win motherfucker')
      }
      // this.brickBreackSound.play();
    }
  }
}
