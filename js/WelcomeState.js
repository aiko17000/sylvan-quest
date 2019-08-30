class WelcomeState {
    constructor(game)
    {
        this.game = game;
        this.nextState = new TestSelectionState(game);
    }
}

WelcomeState.prototype.go = goToNext;