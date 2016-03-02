//If we need a Hero that goes beyond simple properties, 
//a Hero with logic and behavior, we must define a class. 
//If we only need type checking, the interface is sufficient and lighter weight.
export interface Player {
	id: number;
	name: string;
	chineseName: string;
	height: string;
	weight: string;
	birthday: string;
	pic:string[];
}