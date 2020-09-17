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
