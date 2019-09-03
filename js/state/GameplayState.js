class GameplayState {
    constructor(game)
    {
        this.game = game;
        this.map = null;
    }

    enter()
    {
        console.log("Entering " + this.constructor.name);
        this.render();

        console.log("Creating map");
        this.map = new OpenLayers.Map("map");
        this.map.addLayer(new OpenLayers.Layer.OSM());
        this.map.zoomToMaxExtent();

        this.checklocation();
    }

    leave()
    {
        console.log("Leaving " + this.constructor.name);
        this.game.changeState(new GameOverState(this.game));
    }

    checklocation()
    {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(window.game.currentState.success, null, options);


    }

    success(pos)
    {
      var crd = pos.coords;
      console.log('Latitude : ' + crd.latitude + ' / Longitude : ' + crd.longitude);
      
      var zoom = 18;
      var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
      var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
      var position       = new OpenLayers.LonLat(crd.longitude,crd.latitude).transform( fromProjection, toProjection);
      window.game.currentState.map.setCenter(position, zoom);

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
