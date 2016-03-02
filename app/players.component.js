System.register(['angular2/core', './player.service'], function(exports_1, context_1) {
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
    var core_1, player_service_1;
    var PlayersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            }],
        execute: function() {
            PlayersComponent = (function () {
                //inject PlayerSerive
                function PlayersComponent(_playerService) {
                    this._playerService = _playerService;
                    this.players = [];
                }
                PlayersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //getPlayers return promise project=>async operation
                    this._playerService.getPlayers()
                        .then(function (players) { return _this.players = players; });
                };
                PlayersComponent = __decorate([
                    core_1.Component({
                        selector: 'my-players',
                        //a. `String ${a}` ES6 字符串模板 : 支持分行, 支持替换变量.
                        //b. single data-binding(class->view), 所以当改变视图的name的时候,view上的label的name没有变化
                        //(与angular1默认为双向绑定不一样的地方)
                        /*
                                template:`
                                 <h1>{{title}}</h1>
                                 <h2>{{player.name}} details!</h2>
                                 <div> <label>id: </label>{{player.id}}</div>
                                 <div>
                                    <label>name: </label>
                                    <div><input value="{{player.name}}" placeholder="name"></div>
                                 </div>
                                 `
                        */
                        //c.below are 双向绑定,ngModel替换value, 注意这里不能使用{{}} -> 1.当view发生变化的时候,同步class对应的属性 2. 当class属性变化时候,自动同步到view
                        //d. #player # means local template varaible
                        templateUrl: 'app/players.component.html',
                        styleUrls: ['app/players.component.css']
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService])
                ], PlayersComponent);
                return PlayersComponent;
            }());
            exports_1("PlayersComponent", PlayersComponent);
        }
    }
});
//# sourceMappingURL=players.component.js.map