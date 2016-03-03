System.register(['angular2/core', 'angular2/router', './player.service', './player-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, player_service_1, player_detail_component_1;
    var PlayersComponent;
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
            },
            function (player_detail_component_1_1) {
                player_detail_component_1 = player_detail_component_1_1;
            }],
        execute: function() {
            //component : Single Responsibility Principle.
            PlayersComponent = (function () {
                //inject PlayerSerive
                function PlayersComponent(_router, _playerService) {
                    this._router = _router;
                    this._playerService = _playerService;
                    this.players = [];
                }
                PlayersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //getPlayers return promise project=>async operation
                    this._playerService.getPlayers()
                        .then(function (players) { return _this.players = players; });
                };
                //when to call getPlayers: 不应该是构造器,我们应该保证construtor的逻辑足够的简单,比如就是初始化必要的属性,而不应该附加多余的行为.
                //所以我们需要一个特殊的地方来调用这个getPlayers获取数据=>
                //Angular will call it if we implement the Angular ngOnInit Lifecycle Hook. 
                //Angular offers a number of interfaces for tapping into critical moments in the component lifecycle: 
                //at creation, after each change, and at its eventual destruction.
                PlayersComponent.prototype.getPlayers = function () {
                    var _this = this;
                    //to fulfill the async operation, use Promise to get the players data when service call done
                    this._playerService.getPlayers().then(function (players) { return _this.players = players; });
                };
                PlayersComponent.prototype.onSelect = function (player) { this.selectedPlayer = player; };
                PlayersComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.selectedPlayer.id }]);
                };
                PlayersComponent = __decorate([
                    core_1.Component({
                        //selector: 'my-players',
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
                        styleUrls: ['app/players.component.css'],
                        directives: [player_detail_component_1.PlayerDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, player_service_1.PlayerService])
                ], PlayersComponent);
                return PlayersComponent;
            }());
            exports_1("PlayersComponent", PlayersComponent);
        }
    }
});
//# sourceMappingURL=players.component.js.map