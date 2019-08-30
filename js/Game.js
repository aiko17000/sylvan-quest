class Game {

    constructor()
    {
        this.score = 0;
        this.currentState = new WelcomeState(this);
        this.container =  document.getElementById("main-container");
    }

    start()
    {
        console.log("go");
        this.currentState.enter();
    }

    changeState(state)
    {
        this.currentState = state;
        sleep(200).then(() => {
            this.currentState.enter();
        });
    }


    render(markup)
    {
      this.container.innerHTML = markup;
    }
}


// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
