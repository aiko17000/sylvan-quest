class Game {

    constructor()
    {
        this.settings = {
          test : "test2.json",
          distance : 5000,
          good : 3,
          wrong : -1,
        }
        this.score = 0;
        this.currentState = new WelcomeState(this);
        this.container =  document.getElementById("main-container");
        this.test = null;
    }

    start()
    {
      console.log("Starting");
      console.log("Loading data");
      fetch('js/'+this.settings.test)
      .then(response => response.text())
      .then((data) => {

        var parsed = JSON.parse(data);
        var loaded = Object.assign(new Test, parsed);
        loaded.steps.forEach( function(value, index) {
          loaded.steps[index] = Object.assign(new Step, loaded.steps[index]);
          loaded.steps[index].question = Object.assign(new Question, loaded.steps[index].question)
        });
        this.test = loaded;
        console.log("Data loaded");
        console.log(loaded);

        if (!("Notification" in window)) {
          }
        else if (Notification.permission === "granted") {
        }
        else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function (permission) {

            if(!('permission' in Notification)) {
              Notification.permission = permission;
            }
          });
        }

        if(!localStorage.getItem('score')) {
          localStorage.setItem('score' , 0);
        } else {
          this.score = parseInt(localStorage.getItem('score'));
        }

        this.currentState.enter();
      })

    }


    changeState(state)
    {
        this.currentState = state;
        sleep(200).then(() => {
            this.currentState.enter();
        });
    }

    callnext()
    {
      this.currentState.leave();
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
