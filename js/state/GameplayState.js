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
        window.map = L.map('map');

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(window.map);

        window.map.touchZoom.disable();
        window.map.doubleClickZoom.disable();
        window.map.scrollWheelZoom.disable();
        window.map.boxZoom.disable();
        window.map.keyboard.disable();
        window.map.zoomControl.disable()

        var step = window.game.test.getStep();
        window.stepMarker = L.marker([step.x, step.y]).addTo(window.map);

        window.map.setView(window.stepMarker.getLatLng(), 20);

        window.lc = L.control.locate({
          showPopup : false,
          position: 'topright',
        });
        window.lc.addTo(window.map);
        window.lc.start();
        window.lc.
        window.map.on('locationfound', window.game.currentState.onLocationFound);

    }

    leave()
    {
        console.log("Leaving " + this.constructor.name);
        this.game.changeState(new GameOverState(this.game));
    }

    onLocationFound(e) {
      if(window.game.currentState.inStep  == false)
      {
        var user = e.latlng;
        var marker = window.stepMarker.getLatLng()
        map.fitBounds(L.latLngBounds([user, marker]), {padding: [50, 50]});

        var distance = marker.distanceTo(user);
        console.log("Distance : " +distance);
        if(distance < window.game.settings.distance)
        {
            window.game.currentState.inStep =  true;
            console.log(window.game.test.getStep());
            navigator.vibrate([500]);
            window.game.test.getStep().render();
        }
      }
    }

    nextStep(score)
    {
      window.game.score = window.game.score + score;
      console.log("Scored " + score + " / Total : " + window.game.score )
      this.renderExtra("");

      //Si il y'as une prochaine étape
      if ((window.game.test.currentStep + 1 ) in  window.game.test.steps)
      {
        //On supprime le marker
        window.map.removeLayer(window.stepMarker);

        //On incrémente l'etape
        window.game.test.currentStep = window.game.test.currentStep + 1;
        console.log("Going to step " + window.game.test.currentStep );

        //On récupere et affiche le marker
        var step = window.game.test.getStep();
        window.stepMarker = L.marker([step.x, step.y]).addTo(window.map);

        window.game.currentState.inStep =  false;

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
