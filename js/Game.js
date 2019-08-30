class Game {
    count = 0;
    currentState = new WelcomeState(this);
}

Game.change = function (state) {
    if (count++ >= 10) return;
    currentState = state;
    currentState.go();
};



Game.start = function () {
    currentState.go();
};


function goToNext()
{
    console.log(constructor.name);
    game.changeState(nextState);
}