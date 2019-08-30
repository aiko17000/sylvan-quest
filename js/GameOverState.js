class GameOverState {
    constructor(game)
    {
        this.game = game;
    }

    enter()
    {
        console.log("Entering " + this.constructor.name);
        //console.log(this.game.endEvt);
        //this.game.dispatchEvent(this.game.endEvt);
    }

    leave()
    {
        console.log("Leaving " + this.constructor.name);
        //console.log(this.game.endEvt);
        //this.game.dispatchEvent(this.game.endEvt);
    }

}
