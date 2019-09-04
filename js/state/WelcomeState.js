class WelcomeState {
    constructor(game)
    {
        this.game = game;
    }

    enter()
    {
        console.log("Entering " + this.constructor.name);
        this.render();

        var welcome = document.getElementById("welcome");
        welcome.onclick = function() { window.game.callnext() };
    }

    leave()
    {
      console.log("Leaving " + this.constructor.name);
      this.game.changeState(new GameplayState(this.game));
    }


    render()
    {
      const messages = {
        greeter: 'CLICK TO CONTINUE',
      }

      const markup = `
      <div id="welcome" class="center-align teal">
        <br><br>
        <img src="logo.png" height="150" width="150">
        <br> <br>
        <h5 class="white-text">${messages.greeter}</h1>
      </div>
      `;

      this.game.render(markup);

    }
}
