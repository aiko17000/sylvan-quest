class GameplayState {
    constructor(game)
    {
        this.game = game;
        this.nextState = new GameOverState(game);
    }
}

GameplayState.prototype.go = goToNext;