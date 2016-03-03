import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
	selector:'my-player-detail',
	//this path is related to the main(index.html) during run so the path is app/...
	templateUrl: 'app/player-detail.component.html',
	styleUrls: ['app/player-detail.component.css'],
	//Angular insists that we declare a target property to be an input property. 
	//If we don't, Angular rejects the binding and throws an error.
	// ['player'] will receive the value and pass to the class varaible player.
	inputs: ['player']
})
export class PlayerDetailComponent{
	player: Player;

	constructor(
		private _playerService:PlayerService,
		private _routeParams:RouteParams
		){}
	ngOnInit(){
		//The player id is a number. Route parameters are always strings.
		//So we convert the route parameter value to a number with the JavaScript (+) operator.
		let id = +this._routeParams.get('id');
		this._playerService.getPlayer(id)
			.then(player => this.player = player);
	}

	goBack(){
		window.history.back();
	}
}