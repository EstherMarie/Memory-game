document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'probe',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946060854329404/probe.png'
        },
        {
            name: 'probe',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946060854329404/probe.png'
        },
        {
            name: 'scv',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946063341289492/scv.png'
        },
        {
            name: 'scv',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946063341289492/scv.png'
        },
        {
            name: 'drone',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946079325913148/drone.png'
        },
        {
            name: 'drone',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946079325913148/drone.png'
        },
        {
            name: 'zealot',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946068890615879/zealot.png'
        },
        {
            name: 'zealot',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946068890615879/zealot.png'
        },
        {
            name: 'marine',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946058673029180/marine.png'
        },
        {
            name: 'marine',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946058673029180/marine.png'
        },
        {
            name: 'zergling',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946072090738768/zergling.png'
        },
        {
            name: 'zergling',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946072090738768/zergling.png'
        },
        {
            name: 'marauder',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946056332738631/marauder.png'
        },
        {
            name: 'marauder',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946056332738631/marauder.png'
        },
        {
            name: 'executor',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946120056668170/executor.png'
        },
        {
            name: 'executor',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946120056668170/executor.png'
        },
        {
            name: 'hydralisk',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946053102993488/hydralisk.png'
        },
        {
            name: 'hydralisk',
            img: 'https://cdn.discordapp.com/attachments/723945997193183250/723946053102993488/hydralisk.png'
        },
    ]


    // last but not least, we need to ramdomize our card array!
    cardArray.sort(() => Math.round(Math.random()*2)*3) // cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const victoryDisplay = document.querySelector('h3')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    // create game board
    
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'https://cdn.discordapp.com/attachments/723945997193183250/723946075760754769/card_back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'https://cdn.discordapp.com/attachments/723945997193183250/723946065921048677/smile.png')
            cards[optionTwoId].setAttribute('src', 'https://cdn.discordapp.com/attachments/723945997193183250/723946065921048677/smile.png')
            cardsWon.push(cardsChosen)
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
        } else {
            cards[optionOneId].setAttribute('src', 'https://cdn.discordapp.com/attachments/723945997193183250/723946075760754769/card_back.png')
            cards[optionTwoId].setAttribute('src', 'https://cdn.discordapp.com/attachments/723945997193183250/723946075760754769/card_back.png')
            // alert('Try again')
        }
        
        cardsChosen = []
        cardsChosenId = [] // clear both arrays after the selection of the cards

        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            victoryDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    // flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img) // add a image base on the card id
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        } 
    }

    createBoard()
})