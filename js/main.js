(function() {


    var create = location.search.split('create=')[1];

    if(create == 1)
    {
       createTest();
    }
    else {
        startGame();
    }



    function startGame()
    {
        window.game = new Game();
        window.game.start();

        /**game.addEventListener('ended', function (e) {
            startGame();
        });**/
    }


})();
