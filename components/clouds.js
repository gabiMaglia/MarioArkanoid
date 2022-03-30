export class Cloud {
  constructor(scene) {
    this.relatedScene = scene;
  }

  createCloud1(x, y) {
    this.cloud1 = this.relatedScene.physics.add
      .image(x, y, "cloud")
      .setCollideWorldBounds(true)
      .setScale(0.2)
      .setVelocityX(40)
      .setImmovable();
  }
  createCloud2(x, y) {
    this.cloud2 = this.relatedScene.physics.add
      .image(x, y, "cloud")
      .setCollideWorldBounds(true)
      .setScale(0.2)
      .setVelocityX(-40)
      .setImmovable();
  }

  get() {
    return this.cloud2;
  }

  get1() {
    return this.cloud1;
  }

  createTopGroup1() {
    this.cloud1Group = this.relatedScene.physics.add
      .staticGroup({
        key: "cloud",
        frameQuantity: 19,
        gridAlign: {
          width: 10,
          height: 1,
          cellWidth: 38.9,
          cellHeight: 10,
          x: -30, //113
          y: -110, //232
        },
      })
      .scaleXY(-0.84, -0.84);
      this.cloud1Group.getChildren().forEach(function (cloud) {

        cloud._displayOriginY = -390
      }, this);
  }

  createTopGroup2() {
    this.cloud2Group = this.relatedScene.physics.add
      .staticGroup({
        key: "cloud",
        frameQuantity: 11,
        gridAlign: {
          width: 1,
          height: 12,
          cellWidth: 1,
          cellHeight: 38.9,
          x: -160, //113
          y: 14, //232
        },
      })
      .scaleXY(-0.84, -0.84);
      this.cloud2Group.getChildren().forEach(function (cloud) {
       
        cloud._displayOriginX = -420
      }, this);
  }

  createTopGroup3() {
    this.cloud3Group = this.relatedScene.physics.add
      .staticGroup({
        key: "cloud",
        frameQuantity: 11,
        gridAlign: {
          width: 1,
          height: 12,
          cellWidth: 1,
          cellHeight: 38.9,
          x: 763, //113
          y: 14, //232
        }
      })
      .scaleXY(-0.84, -0.84)
      this.cloud3Group.getChildren().forEach(function (cloud) {
        
        cloud._displayOriginX = 620
      }, this);  
      
  }

  getGroup1() {
    return this.cloud1Group;
  }

  getGroup2() {
    return this.cloud2Group;
  }
  getGroup3() {
    return this.cloud3Group;
  }

  cloudImpact(fireball, cloud) {
    if(fireball.isGlued = false){
    let relativeImpact = fireball.body.position.x - cloud.body.position.x;
    if (relativeImpact <= 0.1 && relativeImpact >= -0.1) {
      fireball.setVelocityX(Phaser.Math.Between(-10, 10));
    } else {
      fireball.setVelocity(10 * relativeImpact, 10 * relativeImpact);
    }}
  }
}
