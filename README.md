# JS2048

## Introduction

Welcome to the **JS2048** project, a fully functional, web-based replica of the classic 2048 puzzle game. Built using Object-Oriented JavaScript, this project features a strict separation of concerns between the core game logic (state management, matrix transformations) and the DOM UI rendering. The game is developed using modern web technologies and aims to offer a seamless user experience.

## Demo

- [DEMO LINK](https://ivanovvvihor.github.io/2048Game/)

### Key Features

- **OOP Architecture**: The core logic is encapsulated within a `Game` class utilizing private fields (`#field`, `#score`, `#status`) to prevent unintended state mutations from the UI layer.
- **Complex State Management**: Accurately handles grid transformations (merging algorithms, row/column processing) across all four directions.
- **Game Cycle Handling**: Dynamic detection of win conditions (reaching 2048) and loss conditions (no available moves left).
- **Keyboard Navigation**: Native event listeners bind keyboard arrows to the game engine for smooth user control.
- **Responsive State Feedback**: Real-time DOM updates reflecting score changes, dynamic tile generation, and end-game messages.

## Challenges

Developing JS2048 posed several challenges, particularly around implementing the game's core mechanics and ensuring a smooth user experience.

### Key Challenges:

1. **Tile Movement and Merging**: Implementing the logic for moving and merging tiles required careful handling to ensure accuracy and performance.
2. **Responsive Design**: Making the game playable and visually appealing on different screen sizes involved extensive testing and adjustments.
3. **Animation Performance**: Ensuring smooth animations for tile movements and merges was crucial for a good user experience.
4. **Game State Management**: Keeping track of the game state, including the board configuration, score, and win/lose conditions, needed efficient and bug-free handling.

## Technical Requirements

To run this project, you will need:

- Modern web browser (latest versions of Chrome, Firefox, Safari, or Edge)
- Node.js (version 14.x or newer)
- NPM (version 6.x or newer)

## Installation and Setup

To install the project and run it locally, follow these steps:

1. Clone the repository:
   
```bash
git clone [https://github.com/IvanovvvIhor/2048Game.git](https://github.com/IvanovvvIhor/2048Game.git)

```

2. Navigate to the project directory:

```bash
cd 2048Game

```

3. Install dependencies:

```bash
npm install

```

4. Start the local development server:

```bash
npm start

```

## Usage

After starting the project, it will be available at `http://localhost:8080` (or the port specified by your build tool). You can use this project to play the game and interact with interface elements via keyboard navigation.

## Technologies Used

This project was built using the following technologies:

* **HTML5**: For structuring the content.
* **CSS3 / SCSS**: For styling the game and ensuring responsiveness.
* **JavaScript (ES6+)**: For implementing the game logic and interactivity using Classes, Modules, and Private Fields.
* **NPM**: For task management and dependencies.
* **Git**: For version control.
* **GitHub**: For hosting the repository and demo.

## Design Specifications

* **Design Sizes**:
* Desktop: 1280px
* Tablet: 640px
* Mobile: > 320px

