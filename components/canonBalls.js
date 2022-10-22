export class CanonBall {
  constructor(scene) {
    this.relatedScene = scene;
  }

  createCannonBall(x, y, flip) {
    let canonball = this.relatedScene.physics.add.image(x, y, "canonball");
    canonball.flipX = flip;
    canonball.setScale(0.8);
    canonball.depth = 100
    canonball.alpha = 0.98;
    
  }

}
