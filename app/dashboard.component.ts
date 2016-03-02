import { Component } from 'angular2/core'

import { Player } from './player'
import { PlayerService } from './player.service'

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls:['app/dashboard.component.css'],
	
})
export class DashboardComponent{
	players: Player[] =[];

	//inject PlayerSerive
	constructor(
		private _playerService:PlayerService
		){}

	ngOnInit(){
		//getPlayers return promise project=>async operation
		this._playerService.getPlayers()
			.then(players => this.players = players);
	}
	
}

