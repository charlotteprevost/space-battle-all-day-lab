console.log("JS RUNNING");


// Create Ship Class 

// Give parameters: name hull firepower accuracy 

class Ship {
	constructor(name, hull, firepower, accuracy){
		this.name = name;
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy
	}

	attack(enemy) {
		// If random number < accuracy, attack!
		if (Math.random().toFixed(1) < this.accuracy){
			// reduce enemy hull by firepower
			enemy.hull -= this.firepower;
			console.log(`${this.name} dealt ${this.firepower} to ${enemy.name}, their hull is now ${enemy.hull}`);
		} else {
			console.log(`${this.name}'s attack missed`);
		}
	}

	isAlive() {
		if (this.hull > 0)  {
			return true
		} else {
			return false		
		}

	}
}
 


// Make USSAssembly
const USSAssembly = new Ship("USS Assembly", 20, 5, .7); 


console.log(USSAssembly); // TEST
 
// Create an array to hold the ships?
const alienShips = [];






const game = {

	alienShips: [],

	makeShip: function() {

		for(let i = 0; i < 6; i++){

 			this.alienShips[i] = new Ship("AlienShip_" + i, Math.floor(Math.random() * 4 + 3 ), Math.floor(Math.random() * 3 + 2 ), (Math.random() * .2 + .6).toFixed(1));
		}
	},

	startGame() {
		let askUser = prompt(`Start game?`);
		if (askUser.toLowerCase() === "yes") {
			this.makeShip();
			// start the attacks
			game.fight();
		}
	},

	// this method assumes there is a living alien in position 0
	fight() {

		// we attack alien0
		USSAssembly.attack(game.alienShips[0]);

		// if i just killed the alien 
		if (!game.alienShips[0].isAlive()) {
			// get rid off dead alien (shift), get me the next alien
			game.alienShips.shift();
			// say alien is dead, there are x aliens left
			console.log(`Alien ship is dead!`);
		} 

		// if there are aliens left
		if (game.alienShips.length > 0){

			// alien 0 attacks us back 
			game.alienShips[0].attack(USSAssembly);

			// if alien0 is alive and i am alive
			if (game.alienShips[0].isAlive() && USSAssembly.isAlive()) {
				// see if user wants to keep going to give up		
				game.continueFight();

			} else if (!USSAssembly.isAlive()){
				console.log("A little suffering is good for the soul...");
			}

		} else {
			console.log("Win! Now GO!");
		}
	},
	
	continueFight() {
		let askAttack = prompt(`You have ${USSAssembly.hull} hull left, Do you want to continue?`); 

		// If yes USS attacks
		if (askAttack.toLowerCase() === "yes") {
			game.fight();

		// If no, retreat
		} else {
			// heckel them for being a loser -- add a method to do this?
		}
	}

};



game.startGame()












// const attackPhase = () => {

// 	// Attack SIX ships one by one
// 	let i = 0;
// 	while (i < alienShips.length && USSAssembly.hull){

// 		// USS Assembly attack phase

// 		// IF USS Assembly hit the ship:
// 		if(Math.random().toFixed(1) < USSAssembly.accuracy){

// 			console.log("USS Assembly did 5 DMG to alienShip number " + i + " with hull: " + alienShips[i].hull);

// 			// AlienShip hull takes damage
// 			alienShips[i].hull -= USSAssembly.firepower;
// 			console.log("AlienShip_" + i + "hull: " + alienShips[i].hull);

// 			// If damage not lethal (alien hull > 0), then ALIEN[i] ATTACKS
// 			if (alienShips[i].hull > 0) {

// 				// If Alien[i] HITS
// 				if(Math.random().toFixed(1) < alienShips[i].accuracy){

// 					console.log("USS Assembly has been delt " + alienShips[i].firepower + " by alienShip number " + i);

// 					// USS hull takes damage
// 					USSAssembly.hull -= alienShips[i].firepower;
// 					console.log("USS hull: " + USSAssembly.hull);

// 				}

// 			}
// 		// If USS MISSES, then Alien ATTACKS
// 		} else {

// 			if (Math.random().toFixed(1) < alienShips[i].accuracy){

// 				console.log("USS Assembly has been delt " + alienShips[i].firepower + " by alienShip number " + i);

// 				// USS hull takes damage
// 				USSAssembly.hull -= USSAssembly.firepower;
// 				console.log("USS hull: " + USSAssembly.hull);

// 			}

// 		}

// 		i++;
// 	}
// }

// attackPhase();








// // If HIT AND USS firepower >= Alien Hull
// if (USSAssembly.firepower >= alienShips[i].hull) {

// 	// Ship is destroyed
// 	console.log("AlienShip_" + i + "has been destroyed!");

// 	// SET hull to zero to keep track of dead ships
// 	alienShips[i].hull = 0;

// // If USS HIT alien but didn't destroy it, alien attacks!
// } else {

// 	// If alien hits USS Assembly
// 	if (Math.random().toFixed(1) < alienShips[i].accuracy){

// 		console.log("USS Assembly has been hit by alienShips number " + i "!");

// 		// If alien hits USS firepower >= Alien Hull
// 		if (alienShips[i].firepower >= alienShips[i].hull) {

// 	// Ship is destroyed
// 	console.log("AlienShip_" + i + "has been destroyed!");

// 	// SET hull to zero to keep track of dead ships
// 	alienShips[i].hull = 0;){

// IF USS Assembly MISSED, Alien attacks






// CHECK ATTACK ON SHIP i
// console.log("Start attack on ship " + i);











