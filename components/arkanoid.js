export class Arkanoid {
    constructor(scene){
        this.relatedScene = scene
    }

    createArk() {
        this.arkanoid = this.relatedScene.physics.add.image(400, 550, "arkanoid").setImmovable().setOrigin(0.5, 0.5);
        this.arkanoid.body.allowGravity = false;
        this.arkanoid.body.collideWorldBounds = true;
        
    }
    
    get() {
        return this.arkanoid
    }
    
    
    platformImpact(fireball, arkanoid) {
      let relativeImpact =
      fireball.x - arkanoid.x;
      console.log(relativeImpact);
      
      if (relativeImpact <= 0.1 && relativeImpact >= -0.1) {
        fireball.setVelocityX(Phaser.Math.Between(10, -10));
      } else {
        fireball.setVelocityX(this.arkanoid.calculateVelocity(relativeImpact));
      }
      
      }

      calculateVelocity(relativeImpact) {
        if(relativeImpact > 50) {
          relativeImpact = 50;
        }
        if (relativeImpact > 0) {
          return (8 * relativeImpact);
        } else if (relativeImpact < 0) {
          return (8 * relativeImpact);
        } else {
          return (Phaser.Math.Between(-10, 10))
        }
      }
    
   
   
      arkMove(teclas, fireball, arkanoid){
    if (teclas.left.isDown) {
        this.arkanoid.setVelocityX(-700);
        if (fireball.isGlued) {
          fireball.get().body.position.x = (this.relatedScene.arkanoid.get().body.position.x) + 55;
        }
      } else if (teclas.right.isDown) {
        this.arkanoid.setVelocityX(700);
        if (fireball.isGlued) {
          fireball.get().body.position.x = (this.relatedScene.arkanoid.get().body.position.x) + 75;
        } 

      } else {
        this.arkanoid.setVelocityX(0);
        if (fireball.isGlued) {
          fireball.get().setVelocityX(0);
        }
      }
      if (teclas.space.isDown) {
        if (fireball.isGlued) {
          fireball.get().setGravityY(0);
          fireball.get().setVelocity(Phaser.Math.Between(150, -150), -500);
          fireball.removeGlue();
        }
      }
    }
}