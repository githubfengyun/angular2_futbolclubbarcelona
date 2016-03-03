System.register(['angular2/core', 'angular2/router', './dashboard.component', './players.component', './player-detail.component', './player.service'], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, players_component_1, player_detail_component_1, player_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (players_component_1_1) {
                players_component_1 = players_component_1_1;
            },
            function (player_detail_component_1_1) {
                player_detail_component_1 = player_detail_component_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            }],
        execute: function() {
            //path: the router matches this route's path to the URL in the browser address bar (/heroes).
            //name: the official name of the route; it must begin with a capital letter to avoid confusion with the path (Heroes).
            //component: the component that the router should create when navigating to this route (HeroesComponent).
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Players of Barcelona Club";
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/players',
                            name: 'Players',
                            component: players_component_1.PlayersComponent
                        },
                        {
                            path: '/detail/:id',
                            name: 'PlayerDetail',
                            component: player_detail_component_1.PlayerDetailComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>{{title}}<h1>\n\t\t<a [routerLink]=\"['Dashboard']\">Dashboard</a>\n\t\t<a [routerLink]=\"['Players']\">Players</a>\n\t\t<router-outlet></router-outlet>\n\t",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        //root component(AppComponent) porvide the service providers, so child component no need to provide it again.
                        providers: [player_service_1.PlayerService, router_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map