document.addEventListener('DOMContentLoaded', () => {
	// card options
	const cardArray = [
		{
			name: 'probe',
			img: '../image/probe.png',
		},
		{
			name: 'probe',
			img: '../image/probe.png',
		},
		{
			name: 'scv',
			img: '../image/scv.png',
		},
		{
			name: 'scv',
			img: '../image/scv.png',
		},
		{
			name: 'drone',
			img: '../image/drone.png',
		},
		{
			name: 'drone',
			img: '../image/drone.png',
		},
		{
			name: 'zealot',
			img: '../image/zealot.png',
		},
		{
			name: 'zealot',
			img: '../image/zealot.png',
		},
		{
			name: 'marine',
			img: '../image/marine.png',
		},
		{
			name: 'marine',
			img: '../image/marine.png',
		},
		{
			name: 'zergling',
			img: '../image/zergling.png',
		},
		{
			name: 'zergling',
			img: '../image/zergling.png',
		},
		{
			name: 'marauder',
			img: '../image/marauder.png',
		},
		{
			name: 'marauder',
			img: '../image/marauder.png',
		},
		{
			name: 'executor',
			img: '../image/executor.png',
		},
		{
			name: 'executor',
			img: '../image/executor.png',
		},
		{
			name: 'hydralisk',
			img: '../image/hydralisk.png',
		},
		{
			name: 'hydralisk',
			img: '../image/hydralisk.png',
		},
	];

	// last but not least, we need to ramdomize our card array!
	cardArray.sort(() => Math.round(Math.random() * 2) * 3); // cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	const victoryDisplay = document.querySelector('h3');
	var cardsChosen = [];
	var cardsChosenId = [];
	const cardsWon = [];
	let btn = document.querySelector('#button');

	// create game board

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', '../image/card_back.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	// check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];

		if (cardsChosen[0] === cardsChosen[1]) {
			// alert('You found a match!')
			cards[optionOneId].setAttribute('src', '../image/smile.png');
			cards[optionTwoId].setAttribute('src', '../image/smile.png');
			cardsWon.push(cardsChosen);
			cards[optionOneId].removeEventListener('click', flipCard);
			cards[optionTwoId].removeEventListener('click', flipCard);
		} else {
			cards[optionOneId].setAttribute('src', '../image/card_back.png');
			cards[optionTwoId].setAttribute('src', '../image/card_back.png');
			// alert('Try again')
		}

		cardsChosen = [];
		cardsChosenId = []; // clear both arrays after the selection of the cards

		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			victoryDisplay.textContent = 'Congratulations! You found them all!';
			btn.classList.add('active');
		}
	}

	// flip cards
	function flipCard() {
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img); // add a image base on the card id
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();

	btn.addEventListener('click', () => {
		window.location.reload(true);
	});
});
