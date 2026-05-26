import { Scene } from "excalibur";
import { Game } from "./game";
import { Tree } from "./tree";
import { Background } from "./background";

// maak hier een level
export class Level extends Scene{
    /**
     * 
     * @param {Game} engine 
     */
    onInitialize(engine) {
        const bg = new Background()
        this.add(bg)  
        // voeg hier bomen toe   
        this.add(new Tree());
        
    }
}