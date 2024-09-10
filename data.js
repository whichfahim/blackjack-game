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

randomCard = deck[Math.floor( Math.random()*51 )];
console.log(randomCard)
