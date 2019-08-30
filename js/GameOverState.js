class GameOverState {
    constructor(game)
    {
        this.game = game;
        this.nextState = new WelcomeState(game);
    }
}

GameOverState.prototype.go = goToNext;