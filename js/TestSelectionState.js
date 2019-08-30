class TestSelectionState {
    constructor(game)
    {
        this.game = game;
    }
}

TestSelectionState.prototype.go = function ()
{
    console.log(this.constructor.name);
    this.game.changeState(new GameplayState(this.game));
}
