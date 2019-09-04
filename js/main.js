(function() {


    var create = location.search.split('create=')[1];

    if(create == 1)
    {
       createTest();
    }
    else {
      window.game = new Game();
      window.game.start();
    }


})();
