class GameplayState {
    constructor(game)
    {
        this.game = game;
        this.map = null;
        this.lc = null;
    }

    enter()
    {
        console.log("Entering " + this.constructor.name);
        this.render();

        console.log("Creating map");
        window.map = L.map('map').setView([46.3630104, 2.9846608], 6);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(window.map);

        window.lc = L.control.locate({
          setView : 'always',
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
    	var radius = e.accuracy;
      console.log('passe');
    	L.marker(e.latlng).addTo(window.map)
    		.bindPopup("You are within " + radius + " meters from this point").openPopup();

    }



    success(pos)
    {
      var crd = pos.coords;
      console.log('Latitude : ' + crd.latitude + ' / Longitude : ' + crd.longitude);

      //window.game.currentState.map.setCenter(position, zoom);

    }


    render()
    {
      const messages = {
        title: 'Sylvan Quest',
        greeter: 'Click to continue',
      }

      const markup = `
      <div id="map">

      </div>
      `;

      this.game.render(markup);

    }

}
