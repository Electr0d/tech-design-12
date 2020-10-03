const content = document.querySelector('.assignment-content');
const contentLength = document.querySelector('.assignment-content').children.length;

var questionsListed = 0;

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
	let ref = e.href;
	console.log(ref);
}
