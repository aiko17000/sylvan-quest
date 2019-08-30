class WelcomeState {
    constructor(game)
    {
        this.game = game;
    }

    go()
    {
        console.log(this.constructor.name);
        this.render();
        //this.game.changeState(new TestSelectionState(this.game));
    }


    render()
    {
      const person = {
    name: 'LOL',
    job: 'Web Developer',
    location: 'Hamilton',
    bio: 'Wes is a really cool guy that loves to teach web development!'
  }

  // And then create our markup:
  const markup = `
  <div id="test" class="person">
    <h2>
        ${person.name}
    </h2>
    <p class="location">lol ${person.location}</p>
    <p class="bio">lol2 ${person.bio}</p>
  </div>
  `;

      var element = document.getElementById("main-container");
      element.innerHTML = markup;
      var test = document.getElementById("test");
      test.onclick = function() { alert("moot!"); };
    }
}
