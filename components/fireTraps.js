export class FireTraps {
    constructor(scene) {
        this.relatedScene = scene;
      }

      createFireTrap(x, y){
       this.fireTrap = this.relatedScene.physics.add.image(x, y, 'fireTrap').setImmovable() 
       this.fireTrap.setScale(0.1)
       this.fireTrap.displayOriginX = 566
       this.fireTrap.displayOriginY = 418
       this.fireTrap.body.angularVelocity= 50
       this.fireTrap.setSize(250, 780)
       this.fireTrap.setAngle(55)
       this.fireTrap.body.overlapY = 120
       //console.log(this.fireTrap.body);
       this.fireTrap.body.allowDrag = false
       this.fireTrap.body.syncBounds = true
       this.fireTrap.setOffset(470, -270)
      // console.log(this.fireTrap);  

      }

      getFireTraps() {
          return this.fireTrap
      }
}