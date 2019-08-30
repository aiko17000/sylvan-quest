class GameplayState {
    constructor(game)
    {
        this.game = game;
    }
}

GameplayState.prototype.go = function ()
{
    console.log(this.constructor.name);
    this.game.changeState(new GameOverState(this.game));
}
