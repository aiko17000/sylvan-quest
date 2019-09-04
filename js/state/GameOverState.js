class GameOverState {
    constructor(game)
    {
        this.game = game;
    }

    enter()
    {
        console.log("Entering " + this.constructor.name);
        this.render();
    }

    leave()
    {
        console.log("Leaving " + this.constructor.name);

    }

    render()
    {
      const messages = {
        title: 'Game Over',
        score : 'You scored ' + window.game.score + 'points'
      }

      const markup = `
      <div id="gameover" class="center-align teal">
        <br><br>
        <h1 class="white-text mb100">
            ${messages.title}
        </h2>
        <p class="white-text">${messages.score}</p>
      </div>
      `;

      this.game.render(markup);

    }

}
