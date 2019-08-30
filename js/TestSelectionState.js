class TestSelectionState {
    constructor(game)
    {
        this.game = game;
    }

    go()
    {
        console.log(this.constructor.name);
        this.game.changeState(new GameplayState(this.game));
    }
}
