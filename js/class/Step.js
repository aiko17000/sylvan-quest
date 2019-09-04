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
        quiz: ''
      }

    switch (this.question.type) {
      case 'open':
        messages.quiz = `
        <div class="input-field">
          <input id="answer" type="text" class="validate">
          <label for="answer">Reponse</label>
        </div>
        `;
        break;

      case 'picture' :
        messages.quiz = `
        <div class="input-field">
          <input id="answer" type="file" accept="image/*" capture="camera" required />
        </div>
        `;
        break;

      case 'qcm':
      messages.quiz +=`
      <div class="input-field">
        <select id="answer" class="browser-default">
      `;

      var options = '';
      this.question.choices.forEach(function(value, index) {
          options = options + '<option value="' + value + '">' + value +'</option>';
      });

      messages.quiz += options;

      messages.quiz +=`
        </select>
      </div>
      `;
      break;
      }


      const markup = `
      <div id="modal" class="modal">
        <div class="modal-content">
          <h4>${messages.title}</h4>
          <div class="col s12" ${messages.quiz} <div>
          <div id="bottom" class="center-align">
            <a id="submit" class="waves-effect waves-light btn ">Send</a>
          </div>
        </div>
      </div>
      `;

      window.game.currentState.renderExtra(markup);
      var m = M.Modal.init(document.getElementById("modal"), {dismissible: false});
      m.open();

      var s = document.getElementById("submit");
      s.onclick = window.game.test.getStep().handleAnswer;


    }

    handleAnswer()
    {
      var s = document.getElementById("submit");
      s.parentNode.removeChild(s);

      var answer = document.getElementById("answer").value;

      if(window.game.test.getStep().question.type == "picture")
      {
        answer = "1";
      }

      var score = window.game.settings.wrong;
      var message = '<p class="red-text">Wrong, you get ' + window.game.settings.wrong + ' points.</p>';

      if((answer == window.game.test.getStep().question.answer))
      {
        score = window.game.settings.good;
        message = '<p class="green-text">Correct, you get ' + window.game.settings.good + ' points.</p>';
      }

      var b = document.getElementById("bottom").innerHTML = message;

      sleep(2000).then(() => {
          var m = M.Modal.init(document.getElementById("modal"), {dismissible: false});
          m.close();
          window.game.currentState.nextStep(score);
      });

    }
}
