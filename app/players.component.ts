import { Component } from 'angular2/core';
//import { Router } from 'angular2/router';

import { Player } from './player';
import { PlayerService } from './player.service';
import { PlayerDetailComponent } from './player-detail.component';

//component : Single Responsibility Principle.
@Component({
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
	directives: [PlayerDetailComponent]
	//angular will not recognize customized tag until inject it using directives property.
	//We have to teach the injector how to make a playerService by registering a PlayerService provider
	//子组件,比如PlayerDetailComponent不能也不需要再提供父组件已经提供的service数组
})
export class PlayersComponent{
	players: Player[] =[];
	selectedPlayer: Player;

	//inject PlayerSerive
	constructor(
		//private _router:Router,
		private _playerService:PlayerService
		){}

	ngOnInit(){
		//getPlayers return promise project=>async operation
		this._playerService.getPlayers()
			.then(players => this.players = players);
	}

	//when to call getPlayers: 不应该是构造器,我们应该保证construtor的逻辑足够的简单,比如就是初始化必要的属性,而不应该附加多余的行为.
	//所以我们需要一个特殊的地方来调用这个getPlayers获取数据=>
	//Angular will call it if we implement the Angular ngOnInit Lifecycle Hook. 
	//Angular offers a number of interfaces for tapping into critical moments in the component lifecycle: 
	//at creation, after each change, and at its eventual destruction.
	getPlayers() {
		//to fulfill the async operation, use Promise to get the players data when service call done
		this._playerService.getPlayers().then(players => this.players = players);
	}

	onSelect(player: Player) { this.selectedPlayer = player }

}