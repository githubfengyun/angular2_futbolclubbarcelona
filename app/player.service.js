/*
why injection:
1.如果使用new 去实例化,如果构造方式发生改变,代码里面所有使用new实例化得代码全部需要重写
2.如果需要service缓存共享,如果用new去实例化,那就产生了多个实体.

Do we new the playerService? No way!

    We could create a new instance of the playerService with "new" like this:

playerService = new PlayerService(); // don't do this
That's a bad idea for several reasons including

Our component has to know how to create a playerService.
If we ever change the playerService constructor, we'll have to find every place we create the service and fix it.
Running around patching code is error prone and adds to the test burden.

We create a new service each time we use "new".
What if the service should cache playeres and share that cache with others? We couldn't do that.

We're locking the AppComponent into a specific implementation of the playerService.
It will be hard to switch implementations for different scenarios.
Can we operate offline? Will we need different mocked versions under test? Not easy.
*/
System.register(['angular2/core', './mock-players'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_players_1;
    var PlayerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_players_1_1) {
                mock_players_1 = mock_players_1_1;
            }],
        execute: function() {
            PlayerService = (function () {
                function PlayerService() {
                }
                PlayerService.prototype.getPlayers = function () {
                    //return a promise object
                    return Promise.resolve(mock_players_1.PLAYERS);
                };
                PlayerService.prototype.getPlayersSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_players_1.PLAYERS); }, 20);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                PlayerService.prototype.getPlayer = function (id) {
                    return Promise.resolve(mock_players_1.PLAYERS).then(function (players) { return players.filter(function (player) { return player.id === id; })[0]; });
                };
                PlayerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PlayerService);
                return PlayerService;
            }());
            exports_1("PlayerService", PlayerService);
        }
    }
});
//# sourceMappingURL=player.service.js.map