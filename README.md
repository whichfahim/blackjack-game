# Blackjack Deck Simulation

A dynamic Blackjack deck simulation built using **HTML**, **CSS**, and **JavaScript**. This project allows users to randomly draw cards from a deck and calculates the corresponding points based on Blackjack rules.

### **Live Demo**
[Check out the live demo here!](https://whichfahim.github.io/blackjack-game/)

---

## Features

- Full deck of 52 playing cards, each represented as objects with point values and image URLs.
- Random card drawing functionality with dynamic point calculation.
- Special handling for Aces, which can count as either 1 or 11 points depending on the game situation.
- Visual representation of each card drawn from the deck using images.
- Simple yet effective game interface styled with CSS.

## Technologies Used

- **HTML5**: For structuring the game layout.
- **CSS3**: For styling the game interface and card display.
- **JavaScript**: 
  - Arrays and objects to represent the deck and cards.
  - Functions to handle card drawing, point calculation, and Blackjack logic.
  - Dynamic DOM manipulation to update the interface with drawn cards and total points.

## How It Works

1. **Deck Representation**: 
   - The deck consists of an array of 52 card objects. Each card has a point value based on Blackjack rules and an associated image URL.
   
2. **Random Card Draw**: 
   - Cards are drawn randomly from the deck using a custom JavaScript function that updates the game interface with the drawn card's image.
   
3. **Point Calculation**: 
   - The drawn card's value is added to a running total, and Aces are handled dynamically (either 1 or 11 points) based on the current total.
  
## Future Enhancements
- Add full Blackjack gameplay mechanics, including player and dealer hands.
- Implement card shuffling and removal of drawn cards from the deck.
- Allow players to play using in-game credits.

