import StartScene from './scenes/startScene.js'
import GameOverScene from './scenes/gameOver.js'
import {Level1} from './scenes/Levels/level1.js'
import {Level2} from './scenes/Levels/level2.js'
import {Level3} from './scenes/Levels/level3.js'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'container',
    scene: [  Level3, GameOverScene, Level1, StartScene, Level2,],
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        debugShowBody: true,
        debugShowStaticBody: true
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