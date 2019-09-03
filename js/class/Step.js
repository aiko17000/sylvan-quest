class Step {

    constructor()
    {
        this.x = 0;
        this.y = 0;
        this.question = null;
    }

    render()
    {
      const messages = {
        title: this.question.sentence,
      }

      //TODO rendu des différents types

      const markup = `
      <div id="modal" class="modal">
        <div class="modal-content">
          <h4>${messages.title}</h4>
          <p>A bunch of text</p>
        </div>
      </div>
      `;

      window.game.currentState.renderExtra(markup);
      var m = M.Modal.init(document.getElementById("modal"), {dismissible: false});
      m.open();

      //TODO gestions des evts réponses + scoring + passage au next step et fermeture modal

    }
}
