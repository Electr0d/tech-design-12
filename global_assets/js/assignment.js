const content = document.querySelector('.assignment-content');
const contentLength = document.querySelector('.assignment-content').children.length;

var questionsListed = 0;
let overlayOn = false;

function questionDrawIn() {
	content.children[questionsListed].classList.add('question-draw-in');
	questionsListed++;
	if (questionsListed < contentLength) setTimeout(questionDrawIn, 400);
}

setTimeout(function() {
	if (questionsListed < contentLength) questionDrawIn();
}, 1200);

// Bullet poitns counter
if (document.querySelectorAll('li').length != 0 && document.title.toLowerCase().includes('criteria')) {
	let liLength = document.createElement('div');
	liLength.setAttribute('class', 'li-length');
	liLength.setAttribute('id', 'li-length-all');
	liLength.textContent = 'Bullet points count: ' + document.querySelectorAll('li').length;
	document.querySelector('.assignment-content').appendChild(liLength);
}

// enlarge image onclick
function imageZoomToggle(e, zoomed) {
	let src = e.src;
	let style = e.style;
	console.log(src);

	// create overlay
	let overlay = document.createElement('overlay');
	overlay.setAttribute('onclick', 'removeOverlay()');
	document.body.appendChild(overlay);

	// create image
	let image = document.createElement('img');
	image.setAttribute('src', src);
	image.setAttribute('class', 'overlay-image');
	image.setAttribute('style', 'background: rgb(200, 200, 200)');
	overlay.appendChild(image);

	document.body.style.overflowY = 'hidden';

	overlayOn = true;
}

function removeOverlay() {
	document.body.removeChild(document.querySelector('overlay'));

	document.body.style.overflowY = 'auto';
	overlayOn = false;
}

if(document.querySelectorAll('.animateable').length > 0) {
	setInterval(() => {
		let animateable = document.querySelectorAll('.animateable');
		for(let i = 0; i < animateable.length; i++) {
			let e = animateable[i];
			e.textContent = e.dataset.default + ' ' + e.dataset[e.dataset.index]
			e.dataset.index = Number(e.dataset.index) + 1;
			if(!(Number(e.dataset.index) < Number(e.dataset.length))) {
				e.dataset.index = 0;
			}
			console.log(e.textContent, e.dataset.length, e.dataset.index);
		}
	}, 500);
}

