class WelcomeState {
    constructor(game)
    {
        this.game = game;
    }

    enter()
    {
        console.log("Entering " + this.constructor.name);
        this.render();

        var test = document.getElementById("test");
        test.onclick = function() { this.leave() };
    }

    leave()
    {
      console.log("Leaving " + this.constructor.name);
      this.game.changeState(new TestSelectionState(this.game));
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

      this.game.render(markup);

    }
}
