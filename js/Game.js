class Game extends EventTarget{
    
    constructor()
    {
            this.count = 0;
            this.currentState = new WelcomeState(this);
            this.endEvt = new Event('ended');
    }
}

Game.prototype.changeState = function (state) {
    //if (this.count++ >= 10) return;
    this.currentState = state;
    sleep(200).then(() => {
        this.currentState.go();
    });
};

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }


Game.prototype.start = function () {
    console.log("go");
    this.currentState.go();
};
