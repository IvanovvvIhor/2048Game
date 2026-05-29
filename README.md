```markdown
# 2048 Game

A fully functional, web-based replica of the classic 2048 puzzle game. Built using Object-Oriented JavaScript, the project features a strict separation of concerns between the core game logic (state management, matrix transformations) and the DOM UI rendering.

## Demo
[Live Preview](https://ivanovvvihor.github.io/2048Game/)

## Technologies Used
* HTML5
* CSS3 / SCSS
* JavaScript (ES6+ Classes, Modules, Private Fields)
* NPM (Task management)

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository:**
```bash
   git clone [https://github.com/IvanovvvIhor/js_2048_game.git](https://github.com/IvanovvvIhor/js_2048_game.git)

```

2. **Navigate to the project directory:**

```bash
   cd js_2048_game

```

3. **Install dependencies:**

```bash
   npm install

```

4. **Run the project locally:**

```bash
   npm start

```

## Key Features

* **OOP Architecture:** The core logic is encapsulated within a `Game` class utilizing private fields (`#field`, `#score`, `#status`) to prevent unintended state mutations from the UI layer.
* **Complex State Management:** Accurately handles grid transformations (merging algorithms, row/column processing) across all four directions.
* **Game Cycle Handling:** Dynamic detection of win conditions (reaching 2048) and loss conditions (no available moves left).
* **Keyboard Navigation:** Native event listeners bind keyboard arrows to the game engine for smooth user control.
* **Responsive State Feedback:** Real-time DOM updates reflecting score changes, dynamic tile generation, and end-game messages.

```

```
