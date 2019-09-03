class GameplayState {
    constructor(game)
    {
        this.game = game;
        this.extra =  null;
        this.inStep = false;
    }

    enter()
    {
        console.log("Entering " + this.constructor.name);
        this.render();
        this.extra = document.getElementById("extra");

        console.log("Creating map");
        window.map = L.map('map').setView([46.3630104, 2.9846608], 6);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(window.map);

        var step = window.game.test.getStep();
        window.stepMarker = L.marker([step.x, step.y]).addTo(window.map);

        window.lc = L.control.locate({
          showPopup : false,
          position: 'topright',
        });
        window.lc.addTo(window.map);
        window.lc.start();
        window.map.on('locationfound', window.game.currentState.onLocationFound);

    }

    leave()
    {
        console.log("Leaving " + this.constructor.name);
        this.game.changeState(new GameOverState(this.game));
    }

    onLocationFound(e) {
        var user = e.latlng;
        var marker = window.stepMarker.getLatLng()
        map.fitBounds(L.latLngBounds([user, marker]));

        var distance = marker.distanceTo(user);
        console.log("Distance : " +distance);
        if(distance < 50000)
        {
            window.lc.stop();
            console.log(window.game.test.getStep());
            window.game.test.getStep().render();
        }
    }

    nextStep(score)
    {
      window.game = window.game + score;

      //Si il y'as une prochaine étape
      if ((window.game.test.currentStep + 1 ) in  window.game.test.steps)
      {
        //On supprime le marker
        window.map.removeLayer(window.stepMarker);

        //On incrémente l'etape
        window.game.test.currentStep = window.game.test.currentStep + 1;

        //On récupere et affiche le marker
        var step = window.game.test.getStep();
        window.stepMarker = L.marker([step.x, step.y]).addTo(window.map);

        //On relance la geoloc
        window.lc.start();
      }
      else {
          this.leave();
      }


    }

    renderExtra(markup)
    {
      this.extra.innerHTML = markup;
    }

    render()
    {

      const markup = `
      <div id="map">

      </div>
      <div id="extra">
      </div>
      `;

      this.game.render(markup);

    }

}
