let player = {
    name: "Player1",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// let firstCardImg = document.getElementById("first-card-img")
// let secondCardImg = document.getElementById("second-card-img")

let cardContainerDiv = document.getElementById("cards-container-div")
// let cardImgDivEl = document.getElementById("card-img-container")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    randomCard = deck[Math.floor( Math.random()*51 )];
    return randomCard
}

function startGame() {

    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard.points + secondCard.points

    renderGame()
}

function renderGame() {

    cardContainerDiv.innerHTML = ""
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        // cardsEl.textContent += cards[i] + " "

        // for each card create a new img element in the card container div
        cardImg = document.createElement('img');
        cardImg.setAttribute("id", `img-${i}`);
        //map the number in cards to an image
        // pattern = new RegExp(`images/${cards[i]}_of_.*`)
        cardImg.setAttribute("src", `${cards[i].imgUrl}`)
        cardImg.setAttribute("class","card-img")
        cardContainerDiv.appendChild(cardImg)
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    // console.log("getting new card")
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()

        sum += card.points
        cards.push(card)
        renderGame()        
    }
}
