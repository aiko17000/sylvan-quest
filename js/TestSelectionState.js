class TestSelectionState {
    constructor(game)
    {
        this.game = game;
        this.nextState = new GameplayState(game);
    }
}

TestSelectionState.prototype.go = goToNext;