System.register(['angular2/core', 'angular2/router', './player.service'], function(exports_1, context_1) {
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
    var core_1, router_1, player_service_1;
    var PlayerDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            }],
        execute: function() {
            PlayerDetailComponent = (function () {
                function PlayerDetailComponent(_playerService, _routeParams) {
                    this._playerService = _playerService;
                    this._routeParams = _routeParams;
                }
                PlayerDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //The player id is a number. Route parameters are always strings.
                    //So we convert the route parameter value to a number with the JavaScript (+) operator.
                    var id = +this._routeParams.get('id');
                    if (id) {
                        this._playerService.getPlayer(id)
                            .then(function (player) { return _this.player = player; });
                    }
                    /*
                    this._playerService.getPlayer(id)
                        .then(player => this.player = player);
                    */
                };
                PlayerDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                PlayerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-player-detail',
                        //this path is related to the main(index.html) during run so the path is app/...
                        templateUrl: 'app/player-detail.component.html',
                        styleUrls: ['app/player-detail.component.css'],
                        //Angular insists that we declare a target property to be an input property. 
                        //If we don't, Angular rejects the binding and throws an error.
                        // ['player'] will receive the value and pass to the class varaible player.
                        inputs: ['player']
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService, router_1.RouteParams])
                ], PlayerDetailComponent);
                return PlayerDetailComponent;
            }());
            exports_1("PlayerDetailComponent", PlayerDetailComponent);
        }
    }
});
//# sourceMappingURL=player-detail.component.js.map