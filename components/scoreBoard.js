export class Scoreboard {
    constructor (scene) {
        this.relatedScene = scene
        this.score = 0
    }

    create () {
        
        this.scoreText = this.relatedScene.add.text(646, 16, 'Score: 0', {
            fontFamily: 'mario',
            fontSize : '20px',    
            fill: '#200' 
        });
        
    }
    incrementPoint(points){
        this.score += points
        this.scoreText.setText('Score: ' + this.score)
        if (this.score > 1000){
            this.score = 0
            this.relatedScene.liveBoard.incrementLive(1)
        }
    }
}