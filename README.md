
# Blackjack Game

## Description
This project is a simple implementation of a Blackjack game built with React, Next.js, and Tailwind CSS. It allows players to play Blackjack against a computer dealer.

## Features
- Player can place bets and play Blackjack against the dealer.
- Dealer follows basic Blackjack rules for drawing cards.
- Game logic handles player and dealer hand totals, determining winners, and updating the game state.
- Animations are implemented using Framer Motion library.
- Responsive design for various screen sizes.

## Getting Started
To get a local copy up and running follow these simple steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Play
- Start the game by placing a bet.
- Click "Hit" to draw a card or "Stand" to end your turn.
- The dealer will draw cards according to Blackjack rules.
- If your hand total is higher than the dealer's without exceeding 21, you win.

## Folder Structure
- `components`: React components used in the project.
- `pages`: Next.js pages for routing.
- `styles`: Global CSS styles and Tailwind CSS configuration.
- `public`: Static assets like images and fonts.

## Built With
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## License
This project is licensed under the [MIT License](LICENSE).
