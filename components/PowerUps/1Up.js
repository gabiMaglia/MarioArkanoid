import { PowerUp } from "./powerUp.js";


export class LiveUp extends PowerUp {
    constructor(scene, powerUp) {
        super  (scene, powerUp, '1up');
    }

    givePower() {
        this.relatedScene.liveBoard.incrementLive(1)
    }


}
