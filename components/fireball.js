export class Fireball {
    constructor(scene){
        this.relatedScene = scene
        this.isGlued = true
    }

    createFireball(){
        this.fireball = this.relatedScene.physics.add.sprite(400, 519, "fireball");
        this.fireball.setCollideWorldBounds(true);
        this.fireballLostSound = this.relatedScene.sound.add('ballLost')
        this.fireballLostSound.volume = 0.2
        this.fireball.setScale(1.2)
        this.fireball.setBounce(1)
        
        this.fireball.anims.create({
          key: 'fireballAnim' ,
          frames: this.relatedScene.anims.generateFrameNumbers('fireball'),
          frameRate: 35 ,
          repeat: -1,
          yoyo : true
        })
    
       this.fireball.play('fireballAnim')
    }

    get() {
        return this.fireball;
      }

    fireballLost(){
        return (this.fireball.y > 590)   
    }
      
    setGlue (){
        this.isGlued = true
    }

    removeGlue(){
        this.isGlued = false
    }

}