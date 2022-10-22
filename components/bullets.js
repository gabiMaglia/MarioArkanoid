export class Bullet {
    constructor(scene) {
      this.relatedScene = scene;
    }
  
    createBullet(x, y, flip, velocity) {
      this.bullet = this.relatedScene.physics.add
        .image(x, y, "bullet")
        .setImmovable();
      this.bullet.setScale(0.1);
      this.bullet.flipX = flip;
      this.bullet.setVelocityX(velocity);
    }
  
    getBullet() {
      return this.bullet;
    }
  
    bulletImpact(fireball, bullet) {
      bullet.setGravityY(100);
      
    }
  }
  