class WelcomeState {
    constructor(game)
    {
        this.game = game;
    }
    
    go()
    {
        console.log(this.constructor.name);
        this.game.changeState(new TestSelectionState(this.game));
    }
}
