export class Coins {
    constructor(scene) {
      this.relatedScene = scene;
    }
  
    createCoin(brickX, brickY) {
      let id = Math.random()
      this.coin = this.relatedScene.physics.add.sprite(brickX, brickY, "coin").setInteractive();
      this.coin.name = id
      this.coin.setScale(0.17);
      this.coin.setGravityY(-190)
      setTimeout(() => {
        this.coin.disableBody(true, true);
      }, 260);
    
      this.coin.anims.create({
        key: "coinAnim",
        frames: this.relatedScene.anims.generateFrameNumbers("coin"),
        frameRate: 10,
        repeat: -1,
        yoyo: true
      });
  
      this.coin.play("coinAnim");
  
      return this.coin;
    }
  
    get () {
        return this.coin
        
    }
  }
  