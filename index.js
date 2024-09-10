let player = {
    name: "Per",
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

let firstCardImg = document.getElementById("first-card-img")
let secondCardImg = document.getElementById("second-card-img")

let cardContainerDiv = document.getElementById("cards-container-div")
let cardImgDivEl = document.getElementById("card-img-container")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    if (firstCard === 11){
        firstCardImg.setAttribute("src",`images/ace_of_spades.png`)
    }
    else {
        firstCardImg.setAttribute("src",`images/${firstCard}_of_spades.png`)

    }

    let secondCard = getRandomCard()
    if (secondCard === 11){
        secondCardImg.setAttribute("src",`images/ace_of_spades.png`)
    }
    else {
        secondCardImg.setAttribute("src",`images/${secondCard}_of_spades.png`)

    }

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {


    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "

        //for each card create a new img element in the card container div
        // cardImg = document.createElement('img');
        // cardImg.setAttribute("id", `img-${i}`);
        // //map the number in cards to an image
        // // pattern = new RegExp(`images/${cards[i]}_of_.*`)
        // cardImg.setAttribute("src", `images/${cards[i]}_of_spades.png`)
        // cardImg.setAttribute("class","card-img")
        // cardImgDivEl.appendChild(cardImg)
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
    console.log("getting new card")
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cardImg = document.createElement('img');
        cardImg.setAttribute("class","card-img")
        cardImg.setAttribute("src", `images/${card}_of_spades.png`)
        cardContainerDiv.appendChild(cardImg)
        sum += card
        cards.push(card)
        renderGame()        
    }
}
