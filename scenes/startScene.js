
export default class StartScene extends Phaser.Scene {
    constructor() {
      super({ key: "StartScene" });
      
    }
  
    init() {
      this.teclas = this.input.keyboard.createCursorKeys();
    }
  
    preload() {
      this.load.image(
        "backgroundStart",
        "../assets/images/startScene/startScreenbckGround.jpeg"
      );
      this.load.image("logo", "../assets/images/startScene/superMarioLogo.png");
      this.load.image("arkLogo", "../assets/images/startScene/arkanoidLogo.png");
      this.load.image(
        "marioSelector",
        "../assets/images/startScene/capeMarioSelector.png"
      );
      this.load.audio(
        "backgroundSound",
        "../../assets/sounds/startMenuMusic.mp3"
      );
      this.load.audio("coin", "../../assets/sounds/coin.mp3");
    }
  
    create() {
      this.cameras.main.fadeIn(600, 0, 0, 0);
  
      this.add.image(400, 290, "backgroundStart");
      this.add.image(290, 160, "logo");
      this.add.image(400, 315, "arkLogo");
  
      this.startAudio = this.sound.add("backgroundSound");
      this.startAudio.volume = 0.09;
      this.coinSound = this.sound.add("coin");
      this.coinSound.volume = 0.1;
      this.startAudio.play();
  
      (this.startGame = this.add.text(80, 416, "Start Game!", {
        fontFamily: "mario",
        fontSize: "20px",
        fill: "#420",
      })).setInteractive(),
        (this.options = this.add.text(80, 446, "Options", {
          fontFamily: "mario",
          fontSize: "20px",
          fill: "#420",
        })).setInteractive(),
        (this.quit = this.add.text(80, 496, "Quit Game!", {
          fontFamily: "mario",
          fontSize: "20px",
          fill: "#420",
        })).setInteractive();
  
      this.startGame.on("pointerover", () => {
        this.buttonSelector.y = 416;
      });
  
      this.startGame.on("pointerdown", () => {
        this.launchGame();
      });
  
      this.options.on("pointerover", () => {
        this.buttonSelector.y = 446;
      });
  
      this.quit.on("pointerover", () => {
        this.buttonSelector.y = 496;
      });
  
      this.position_Y = [496, 446, 416];
      this.i = 2;
  
      this.selectedOption = this.position_Y[this.i];
  
      this.buttonSelector = this.add.image(
        50,
        this.selectedOption,
        "marioSelector"
      );
  
      this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
      this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  
      this.launchGame = () => {
        this.cameras.main.fadeOut(500, 0, 0, 0);
        this.startAudio.stop();
  
        this.time.delayedCall(
          70,
          () => {
            this.coinSound.play();
          },
          null
        );
        this.time.delayedCall(
          100,
          () => {
            this.scene.start("Level1");
          },
          null
        );
      };
    }
  
    update() {
      if (Phaser.Input.Keyboard.JustDown(this.down)) {
        if (this.i <= 0) {
          this.i = 2;
        } else {
          this.i -= 1;
        }
        this.buttonSelector.y = this.position_Y[this.i];
        
        console.log(this.position_Y[this.i]);
      } else if (Phaser.Input.Keyboard.JustDown(this.up)) {
        if (this.i >= 2) {
          this.i = 0;
        } else {
          this.i += 1;
        }
        this.buttonSelector.y = this.position_Y[this.i];
        console.log(this.position_Y[this.i]);
      } 
      else if (this.teclas.space.isDown) {
        if (this.i === 2) {
          this.launchGame();
        }
      }
    }
  }