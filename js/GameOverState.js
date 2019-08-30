class GameOverState {
    constructor(game)
    {
        this.game = game;
    }
    
    go()
    {
        console.log(this.constructor.name);
        console.log(this.game.endEvt);
        this.game.dispatchEvent(this.game.endEvt); 
    }
}
