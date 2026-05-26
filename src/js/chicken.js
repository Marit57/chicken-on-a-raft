import { Actor, Engine, Vector, Sprite } from "excalibur"
import { Resources } from './resources'
import { Hat } from "./hat"

export class Chicken extends Actor {
    sprite;
    constructor(x) {
        super({width: Resources.Bird.width, height: Resources.Bird.height })
        this.pos = new Vector(x,-50);
    }
    onInitialize(engine) {
        this.sprite = Resources.Bird.toSprite()
        this.graphics.use(this.sprite)
        this.sprite.flipHorizontal = true
        this.addChild(new Hat());
    }

    // random bokbok sound
    onPostUpdate() {
        if(Math.random() < 0.001) {
            Resources.ChickenOne.play() // kan ook chickenTwo en chickenThree zijn
        }
    }

}
