/*
why injection:
1.如果使用new 去实例化,如果构造方式发生改变,代码里面所有使用new实例化得代码全部需要重写
2.如果需要service缓存共享,如果用new去实例化,那就产生了多个实体.

Do we new the playerService? No way!

	We could create a new instance of the playerService with "new" like this:

playerService = new PlayerService(); // don't do this
That's a bad idea for several reasons including

Our component has to know how to create a playerService.
If we ever change the playerService constructor, we'll have to find every place we create the service and fix it. 
Running around patching code is error prone and adds to the test burden.

We create a new service each time we use "new".
What if the service should cache playeres and share that cache with others? We couldn't do that.

We're locking the AppComponent into a specific implementation of the playerService. 
It will be hard to switch implementations for different scenarios. 
Can we operate offline? Will we need different mocked versions under test? Not easy.
*/

import {Injectable} from 'angular2/core';
// the data can be from anywhere: server, mock file, etc.
import {PLAYERS} from './mock-players';

@Injectable()
export class PlayerService{
	getPlayers(){
		//return a promise object
		return Promise.resolve(PLAYERS);
	}

	getPlayersSlowly() {
		return new Promise<Player[]>(resolve =>
			setTimeout(() => resolve(PLAYERS), 20) // 2 seconds
		);
	}

	getPlayer(id: number) {
    	return Promise.resolve(PLAYERS).then(
      		players => players.filter(player => player.id === id)[0]
    	);
    }
}