export class CanonBall {
  constructor(scene) {
    this.relatedScene = scene;
  }

  createCannonBall(x, y, flip) {
    let canonball = this.relatedScene.physics.add.image(x, y, "canonball");
    canonball.flipX = flip;
    canonball.setScale(0.8);
    canonball.alpha = 0.98;
  }

  createBullet1(x, y, flip) {
    this.bullet1 = this.relatedScene.physics.add
      .image(x, y, "bullet")
      .setImmovable();
    this.bullet1.setScale(0.1);
    this.bullet1.flipX = flip;
    this.bullet1.setVelocityX(-100);
  }

  getBullet1() {
    return this.bullet1;
  }

  createBullet2(x, y, flip) {
    this.bullet2 = this.relatedScene.physics.add
      .image(x, y, "bullet")
      .setImmovable();
    this.bullet2.setScale(0.1);
    this.bullet2.flipX = flip;
    this.bullet2.setVelocityX(100);
  }
  getBullet2() {
    return this.bullet2;
  }

  bulletImpact(fireball, bullet) {
    bullet.setGravityY(!100);
  }
}
