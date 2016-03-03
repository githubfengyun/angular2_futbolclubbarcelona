import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'

import { DashboardComponent } from './dashboard.component';
import { PlayersComponent } from './players.component';
import { PlayerDetailComponent } from './player-detail.component';
import { Player } from './player'
import { PlayerService } from './player.service'

//path: the router matches this route's path to the URL in the browser address bar (/heroes).
//name: the official name of the route; it must begin with a capital letter to avoid confusion with the path (Heroes).
//component: the component that the router should create when navigating to this route (HeroesComponent).
@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/players',
		name: 'Players',
		component: PlayersComponent
	},
	{
		path: '/detail/:id',
		name: 'PlayerDetail',
		component: PlayerDetailComponent
	}
])
@Component({
	selector: 'my-app',
	template:`
		<h1>{{title}}<h1>
		<a [routerLink]="['Dashboard']">Dashboard</a>
		<a [routerLink]="['Players']">Players</a>
		<router-outlet></router-outlet>
	`,
	styleUrls:['app/app.component.css'],
	directives:[ROUTER_DIRECTIVES],
	//root component(AppComponent) porvide the service providers, so child component no need to provide it again.
	providers:[PlayerService, ROUTER_PROVIDERS]

})
// export is required for main.ts to import and call.
export class AppComponent{
	title = "Players of Barcelona Club";
}