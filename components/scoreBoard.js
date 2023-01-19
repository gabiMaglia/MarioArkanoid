export class Scoreboard {
    
    constructor (scene, score) {
        this.relatedScene = scene
        this.score = score 
    }
    
    create (points) {
        this.score = points
        this.scoreText = this.relatedScene.add.text(646, 16, 'Score: ' + this.score, {
            fontFamily: 'mario',
            fontSize : '20px',    
            fill: '#200' 
        });
        
    }
    incrementPoint(points){
        localStorage.score = this.score
        this.score += points
        this.scoreText.setText('Score: ' + parseInt(localStorage.score))
        if (this.score > 700){
            this.score  = 0
            this.relatedScene.liveBoard.incrementLive(1)
        }
       
    }

    get() {
     return this.score
    }
}