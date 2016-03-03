import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
	//selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent{
	players: Player[] =[];

	//inject PlayerSerive
	constructor(
		private _playerService:PlayerService,
		private _router:Router
		){}

	ngOnInit(){
		//getPlayers return promise project=>async operation
		this._playerService.getPlayers()
			.then(players => this.players = players);
	}

	gotoDetail(player:Player){
		//This array has two elements, 
		//the name of the destination route and a route parameter object with an id field set to the value of the selected player's id.
		let link = ['PlayerDetail', { id: player.id }];
		this._router.navigate(link);
	}
	
}

