class GameOverState {
    constructor(game)
    {
        this.game = game;
    }
}

GameOverState.prototype.go = function ()
{
    console.log(this.constructor.name);
    console.log(this.game.endEvt);
    this.game.dispatchEvent(this.game.endEvt);
}
