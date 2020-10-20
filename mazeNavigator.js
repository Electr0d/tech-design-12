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
			duration: 1.7
		},
		step_1: {
			type: 'stop'
		},

		// phase 2
		step_2: {
			type: 'roll',
			speed: 52,
			direction: 60,
			duration: 1
		},
		step_3: {
			type: 'stop'
		},

		// phase 3
		step_4: {
			type: 'roll',
			speed: 52,
			direction: -35,
			duration: 1.35
		},

		// phase 4
		step_5: {
			type: 'stop'
		},

		step_6: {
			type: 'roll',
			speed: 75,
			direction: 60,
			duration: 1.4
		},

		// phase 5
		step_7: {
			type: 'stop'
		},
		step_8: {
			type: 'roll',
			speed: 150,
			direction: -30,
			duration: 1
		},
		step_9: {
			type: 'roll',
			speed: 150,
			direction: -40,
			duration: 1
		},
		length: 9
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
async function wait(ms) {
	await delay(ms / 1000);
}

function invertColor() {
	led(255 - rgb.r, 255 - rgb.g, 255 - rgb.b);
	if (!rgb.effects.invert) {
		rgb.effects.invert = true;
	} else {
		rgb.effects.invert = false;
	}
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

/*
	if (step.type == 'roll') {
		led(50, 200, 50);
	} else if (type == 'set') {
		led(255, 80, 20);
	} else {
		led(200, 25, 25);
	}

	async function executeStep(maze) {
	let step = maze['step_' + maze.index];
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

	if (step.index < step.length) {
		maze.index++;
		executeStep(maze);
	}
}
	*/
