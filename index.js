import StartScene from './scenes/startScene.js'
import GameOverScene from './scenes/gameOver.js'
import {Level1} from './scenes/Levels/level1.js'
import {Level2} from './scenes/Levels/level2.js'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'container',
    scene: [Level2, StartScene, Level1, GameOverScene],
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
      
    },
    audio: {
      disableWebAudio: false
    }
  }
  
  var game = new Phaser.Game(config);