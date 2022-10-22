export class Coins {
  constructor(scene) {
    this.relatedScene = scene;
  }

  createCoin(brickX, brickY) {
    const COIN_PROBABILITY = Math.floor((Math.random() * 10) / 2);

    if (COIN_PROBABILITY > 1) {
      this.relatedScene.coinAudio.play();
      this.relatedScene.scoreboard.incrementPoint(50);
      let id = Math.random();
      this.coin = this.relatedScene.physics.add.sprite(brickX, brickY, "coin");
      this.coin.name = id;
      this.coin.setScale(0.17);
      this.coin.setGravityY(-190);

      this.relatedScene.time.delayedCall(
        260,
        () => {
          this.coin.disableBody(true, true);
        },
        null
      );

      this.coin.anims.create({
        key: "coinAnim",
        frames: this.relatedScene.anims.generateFrameNumbers("coin"),
        frameRate: 10,
        repeat: -1,
        yoyo: true,
      });

      this.coin.play("coinAnim");
    }
  }
  get() {
    return this.coin;
  }
}
