class Game extends EventTarget{
    
    constructor()
    {
        super();
        this.count = 0;
        this.currentState = new WelcomeState(this);
        this.endEvt = new Event('ended');
    }
    
    changeState(state)
    {
        this.currentState = state;
        sleep(200).then(() => {
            this.currentState.go();
        });
    }
    
    start()
    {
        console.log("go");
        this.currentState.go();
    }
}

Game.prototype.changeState = function (state) {
    //if (this.count++ >= 10) return;

};

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

