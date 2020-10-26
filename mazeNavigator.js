let rgb = {
	r: 0,
	g: 0,
	b: 0,
	effects: {
		invert: false,
		epilepsyMode: false
	}
};
const mazes = {
	noidea: {

		// phase 1
		step_0: {
			type: 'roll',
			speed: 112,
			direction: 0,
			duration: 1.74
		},
		step_1: {
			type: 'stop'
		},

		// phase 2
		step_2: {
			type: 'roll',
			speed: 60,
			direction: 60,
			duration: 1.08
		},
		step_3: {
			type: 'stop'
		},

		// phase 3
		step_4: {
			type: 'roll',
			speed: 50,
			direction: -35,
			duration: 1.3
		},

		// phase 4
		step_5: {
			type: 'stop'
		},

		step_6: {
			type: 'roll',
			speed: 43,
			direction: 60,
			duration: 2
		},

		// phase 5
		step_7: {
			type: 'stop',
			duration: 2,
		},
		step_8: {
			type: 'set',
			direction: -30,
		},

		step_9: {
			type: 'roll',
			speed: 150,
			direction: -30,
			duration: 0.93
		},
		step_10: {
		type: 'stop'
		},
		
		step_11: {
			type: 'roll',
			speed: 165,
			direction: -45,
			duration: 0.64,
		},
		step_12: {
		type: 'stop'
		},

		// phase 6
		step_13: {
			type: 'roll',
			speed: 100,
			direction: 0,
			duration: 0.5,
		},
		length: 14
		// index: 0
	}
};

async function startProgram() {
	// Write code here
	maze('noidea', 'normal');
}

function resetLed() {
	led(rgb.r, rgb.g, rgb.b);
}

function led(r, g, b) {
	setMainLed({ r: r, g: g, b: b });
	rgb.r = r;
	rgb.g = g;
	rgb.b = b;
}

function invertColor() {
	led(255 - rgb.r, 255 - rgb.g, 255 - rgb.b);
	if (!rgb.effects.invert) {
		rgb.effects.invert = true;
	} else {
		rgb.effects.invert = false;
	}
}
async function maze(maze, direction) {
	let mazeLength = mazes[maze].length;

	if (direction == 'normal') {
		// maze code

		// executeStep(mazes[maze]);
		
		for (let i = 0; i < mazeLength; i++) {
			let step = mazes[maze]['step_' + i];
			
			if (step.type == 'set') {
				led(255, 80, 20);
				setHeading(step.direction);
			} else if (step.type == 'roll') {
				led(50, 200, 50);
				await roll(step.direction, step.speed, step.duration);
			} else if (step.type == 'stop') {
				led(200, 25, 25);
				stopRoll();
			}
		}
	}
}
async function onCollision() {
	await speak('OW!');
}





function epilepsyMode(duration) {
	if (!rgb.effects.epilepsyMode) {
		rgb.effects.epilepsyMode = true;

		function toggle() {
			led(0, 0, 0);
			setTimeout(() => {
				resetLed();
				setTimeout('toggle', duration);
			}, duration);
		}
	} else {
		rgb.effects.epilepsyMode = false;
	}
}