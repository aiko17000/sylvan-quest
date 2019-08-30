class WelcomeState {
    constructor(game)
    {
        this.game = game;
    }
}

WelcomeState.prototype.go = function ()
{
    console.log(this.constructor.name);
    this.game.changeState(new TestSelectionState(this.game));
}
