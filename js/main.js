(function() {

    startGame();

    function startGame()
    {
        var game = new Game();
        game.start();

        /**game.addEventListener('ended', function (e) {
            startGame();
        });**/
    }


})();
