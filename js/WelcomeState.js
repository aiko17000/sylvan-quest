class WelcomeState {
    constructor(game)
    {
        this.game = game;
    }
}


Red = function (light) {
    this.light = light;
 
    this.go = function () {
        log.add("Red --> for 1 minute");
        light.change(new Green(light));
    }
};