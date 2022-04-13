export class LevelBoard {
    constructor (scene, level) {
        this.relatedScene = scene
        this.level = level
    }
    level(){
        return this.level
    }
    create (){
        this.levelBoard = this.relatedScene.add.text (346, 16, 'Level: '+ this.level , {
            fontFamily: 'mario',
            fontSize : '20px',    
            fill: '#FFA' 
        });
    }

}    