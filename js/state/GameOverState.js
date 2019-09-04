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
        title: 'GAME OVER',
        score : 'You scored ' + window.game.score + ' points'
      }

      const markup = `
      <div id="gameover" class="center-align teal">
        <br><br>
        <h2 class="white-text mb50">
            ${messages.title}
        </h2>
        <h5 class="white-text">${messages.score}</h5>
      </div>
      `;

      this.game.render(markup);

    }

}
