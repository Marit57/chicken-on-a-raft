import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'
import { Chicken } from './chicken'

export class Tree extends Actor {
    constructor() {
        super({width:Resources.Tree.width, height:Resources.Tree.height})
    }
    onInitialize(engine) {
        this.graphics.use(Resources.Tree.toSprite())
        this.vel = new Vector(Math.random()*80-120, 0)
        this.pos = new Vector(Math.random() * 255, 300);
        this.on('exitviewport', () => this.resetPosition())

        this.addChild(new Chicken(-50));
        this.addChild(new Chicken(50));
    }

    resetPosition() {
        this.pos.x = 1020
    }
}
