class GameplayState {
    constructor(game)
    {
        this.game = game;
    }

    enter()
    {
        console.log("Entering " + this.constructor.name);
    }

    leave()
    {
        console.log("Leaving " + this.constructor.name);
        this.game.changeState(new GameOverState(this.game));
    }
}
