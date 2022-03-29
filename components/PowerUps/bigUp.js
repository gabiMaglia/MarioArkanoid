import { PowerUp } from "./powerUp.js";


export class BigUp extends PowerUp {
    constructor(scene, powerUp) {
        super  (scene, powerUp, 'bigUp');
    }

    givePower() {
        console.log('haceGrade');
    }


}
