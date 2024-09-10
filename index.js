let deck = [
  { points: 2, imgUrl: "images/2_of_hearts.png" },
  { points: 3, imgUrl: "images/3_of_hearts.png" },
  { points: 4, imgUrl: "images/4_of_hearts.png" },
  { points: 5, imgUrl: "images/5_of_hearts.png" },
  { points: 6, imgUrl: "images/6_of_hearts.png" },
  { points: 7, imgUrl: "images/7_of_hearts.png" },
  { points: 8, imgUrl: "images/8_of_hearts.png" },
  { points: 9, imgUrl: "images/9_of_hearts.png" },
  { points: 10, imgUrl: "images/10_of_hearts.png" },
  { points: 10, imgUrl: "images/J_of_hearts.png" }, // Jack
  { points: 10, imgUrl: "images/Q_of_hearts.png" }, // Queen
  { points: 10, imgUrl: "images/K_of_hearts.png" }, // King
  { points: 11, imgUrl: "images/A_of_hearts.png" }, // Ace

  { points: 2, imgUrl: "images/2_of_diamonds.png" },
  { points: 3, imgUrl: "images/3_of_diamonds.png" },
  { points: 4, imgUrl: "images/4_of_diamonds.png" },
  { points: 5, imgUrl: "images/5_of_diamonds.png" },
  { points: 6, imgUrl: "images/6_of_diamonds.png" },
  { points: 7, imgUrl: "images/7_of_diamonds.png" },
  { points: 8, imgUrl: "images/8_of_diamonds.png" },
  { points: 9, imgUrl: "images/9_of_diamonds.png" },
  { points: 10, imgUrl: "images/10_of_diamonds.png" },
  { points: 10, imgUrl: "images/J_of_diamonds.png" }, // Jack
  { points: 10, imgUrl: "images/Q_of_diamonds.png" }, // Queen
  { points: 10, imgUrl: "images/K_of_diamonds.png" }, // King
  { points: 11, imgUrl: "images/A_of_diamonds.png" }, // Ace

  { points: 2, imgUrl: "images/2_of_clubs.png" },
  { points: 3, imgUrl: "images/3_of_clubs.png" },
  { points: 4, imgUrl: "images/4_of_clubs.png" },
  { points: 5, imgUrl: "images/5_of_clubs.png" },
  { points: 6, imgUrl: "images/6_of_clubs.png" },
  { points: 7, imgUrl: "images/7_of_clubs.png" },
  { points: 8, imgUrl: "images/8_of_clubs.png" },
  { points: 9, imgUrl: "images/9_of_clubs.png" },
  { points: 10, imgUrl: "images/10_of_clubs.png" },
  { points: 10, imgUrl: "images/J_of_clubs.png" }, // Jack
  { points: 10, imgUrl: "images/Q_of_clubs.png" }, // Queen
  { points: 10, imgUrl: "images/K_of_clubs.png" }, // King
  { points: 11, imgUrl: "images/A_of_clubs.png" }, // Ace

  { points: 2, imgUrl: "images/2_of_spades.png" },
  { points: 3, imgUrl: "images/3_of_spades.png" },
  { points: 4, imgUrl: "images/4_of_spades.png" },
  { points: 5, imgUrl: "images/5_of_spades.png" },
  { points: 6, imgUrl: "images/6_of_spades.png" },
  { points: 7, imgUrl: "images/7_of_spades.png" },
  { points: 8, imgUrl: "images/8_of_spades.png" },
  { points: 9, imgUrl: "images/9_of_spades.png" },
  { points: 10, imgUrl: "images/10_of_spades.png" },
  { points: 10, imgUrl: "images/J_of_spades.png" }, // Jack
  { points: 10, imgUrl: "images/Q_of_spades.png" }, // Queen
  { points: 10, imgUrl: "images/K_of_spades.png" }, // King
  { points: 11, imgUrl: "images/A_of_spades.png" }, // Ace
];


let player = {
    name: "Fahim",
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
