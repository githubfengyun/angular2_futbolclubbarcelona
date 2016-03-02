import { Component } from 'angular2/core';

import { Player } from './player'
import { PlayerService } from './player.service'

@Component({
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
	//angular will not recognize customized tag until inject it using directives property.
	//directives: [playerDetailComponent],
	//We have to teach the injector how to make a playerService by registering a PlayerService provider
	//子组件,比如PlayerDetailComponent不能也不需要再提供父组件已经提供的service数组
})
export class PlayersComponent{
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