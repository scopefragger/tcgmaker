# TCGMaker

A web-based Pokémon Trading Card Game (TCG) puzzle trainer that challenges players to solve one-turn victory scenarios. Master advanced strategies, learn official Pokémon TCG rules, and improve your competitive gameplay through carefully crafted puzzle challenges.

## What is TCGMaker?

TCGMaker is an interactive learning platform where players face puzzle-style challenges that require deep knowledge of Pokémon TCG mechanics. Each puzzle presents a specific game state where you must find the winning sequence of moves in a single turn.

## Features

- **Interactive Game Board**: Visual representation of both player and opponent fields, including active Pokémon, bench, hand, deck, and discard piles
- **Multiple Difficulty Levels**: Challenges range from Beginner to Master difficulty
- **Real Pokémon TCG Cards**: Uses official card images from the Pokémon TCG API
- **Puzzle Scenarios**: 6 unique challenge scenarios with different strategic focuses:
  - Energy denial combos
  - Switching and pivoting strategies
  - Ability chaining
  - Comeback scenarios
  - High-stakes battles against powerful VMAX/VSTAR Pokémon
- **Progression System**: Earn XP rewards and track your mastery level
- **Card Zoom**: Click any card to view it in full size for detailed reading

## Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm preview
```

## Project Structure

```
tcgmaker/
├── app.jsx              # Main app component with page routing
├── data/
│   └── challenges.js    # Challenge configurations and game states
├── src/
│   └── main.jsx        # App entry point
└── index.html          # HTML template
```

## How to Play

1. **Select a Challenge**: Choose from various difficulty levels and scenarios
2. **Analyze the Board**: Review your hand, active Pokémon, bench, and opponent's field
3. **Find the Winning Move**: Determine the sequence of card plays that leads to victory in one turn
4. **Execute Your Strategy**: Play cards in the correct order to solve the puzzle

## Challenge Types

- **The Snorlax Stall** (Intermediate) - Energy denial tactics
- **Mew VMAX Sweep** (Expert) - Perfect move chaining against powerful opponents
- **Energy Denial Escape** (Master) - Resource management under pressure
- **The Pivot Play** (Beginner) - Strategic switching fundamentals
- **The Comeback** (Intermediate) - Recovery and counter-attack mechanics
- **Triple Threat Combo** (Master) - Complex ability sequencing

## License

This project is for educational purposes and uses Pokémon TCG card images for training. All Pokémon TCG content is © Pokémon Company International.
