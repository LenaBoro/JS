;(function(){
	window.SimulatorBattle = Simulator;
	
	function Simulator(){
		this.player1 = new Fighter("Cat", 10, 100, 15, 25);
		this.player2 = new Fighter("Dog", 10, 100, 15, 25);
		this.fight();
	}
	
	Simulator.prototype.fight = function(){
		this.player2.protect(this.player1.attack());
		if(!this.player2.isAlive()) {
			console.log("Win " + this.player1.getInfo());
			return;
		}
		this.player1.protect(this.player2.attack());
		if(!this.player1.isAlive()) {
			console.log("Win " + this.player2.getInfo());
			return;
		}
		console.log(this.player1.getInfo());
		console.log(this.player2.getInfo());
		var that = this;
		setTimeout(function(){
			that.fight();
		}, 2000);
	} 
	
	function Fighter(name, armor, health, minA, maxA){
		this._name = name;
		this._armor = armor;
		this._health = health;
		this._minA = minA;
		this._maxA = maxA;
	}
	
	Fighter.prototype.attack = function(){
		return getRandom(this._minA, this._maxA);		
	}
	
	Fighter.prototype.protect = function(attack){
		var value =  attack - this._armor;
		if(value > 0){ 
			this._health -=  value; 
		};
	}
	
	Fighter.prototype.getInfo = function(){
		return "Player: " + this._name + " Health: " + this._health;
	}
	
	Fighter.prototype.isAlive = function(){
		return this._health > 0;
	}
	
	function getRandom(min, max){
		return Math.round(Math.random()*(max-min) + min);
	}	
}());