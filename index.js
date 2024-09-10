availableCards = {
    1: "A_of_",
    2: "2_of_",
    3: "3_of_",
    4: "4_of_",
    5: "5_of_",
    6: "6_of_",
    7: "7_of_",
    8: "8_of_",
    9: "9_of_",
    10: "10_of_",
    11: "J_of_",
    12: "Q_of_",
    13: "K_of_",
};



availableSuites = {
    1: "hearts",
    2: "diamonds",
    3: "clubs",
    4: "spades"
}

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

// let firstCardImg = document.getElementById("first-card-img")
// let secondCardImg = document.getElementById("second-card-img")

let cardContainerDiv = document.getElementById("cards-container-div")
// let cardImgDivEl = document.getElementById("card-img-container")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1

    let suite = Math.floor( Math.random()*4 ) + 1


    let cardDrawn = `${availableCards[randomNumber]}${availableSuites[suite]}`

    // console.log(cardDrawn)

    // if (randomNumber > 10) {
    //     return 10
    // } else if (randomNumber === 1) {
    //     return 11
    // } else {
    //     return randomNumber
    // }
    return cardDrawn

}

function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let firstPoint = 0

    if (firstCard.slice(0,3)==="king" || firstCard.slice(0,4)==="queen" || firstCard.slice(0,3)==="jack"){
        firstPoint = 11
    }   else {
        firstPoint = Number(firstCard.slice(0,1))
    }

    console.log(firstCard,firstPoint)

    let secondCard = getRandomCard()
    let secondPoint = 0

    if (secondCard.slice(0,3)==="king" || secondCard.slice(0,4)==="queen" || secondCard.slice(0,3)==="jack"){
        secondPoint = 10
    }   else {
        secondPoint = Number(firstCard.slice(0,1))
    }

    console.log(secondCard,secondPoint)

    cards = [firstCard, secondCard]
    sum = firstPoint + secondPoint

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
        cardImg.setAttribute("src", `images/${cards[i]}.png`)
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
        console.log(card)
        // cardImg = document.createElement('img');
        // cardImg.setAttribute("class","card-img")
        // cardImg.setAttribute("src", `images/${card}_of_spades.png`)
        // cardContainerDiv.appendChild(cardImg)
        let points = 0
        if (card.slice(0,3)==="king" || card.slice(0,4)==="queen" || card.slice(0,2)==="ace"){
            points = 11
        }   else {
            points = Number(card.slice(0,1))
        }

        console.log(points)

        sum += points
        cards.push(card)
        renderGame()        
    }
}
