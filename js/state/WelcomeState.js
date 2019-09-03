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
        title: 'Sylvan Quest',
        greeter: 'Click to continue',
      }

      const markup = `
      <div id="welcome" class="center-align teal">
        <br><br>
        <h1 class="white-text mb100">
            ${messages.title}
        </h2>
        <p class="white-text">${messages.greeter}</p>
      </div>
      `;

      this.game.render(markup);

    }
}
