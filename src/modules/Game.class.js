class Game {
  #field;
  #score;
  #status;

  constructor(initialState) {
    this.#field = initialState
      ? this.#cloneField(initialState)
      : this.#createEmptyBoard();
    this.#score = 0;
    this.#status = 'idle';
  }

  moveLeft() {
    this.#makeMove(() => {
      for (let i = 0; i < 4; i++) {
        this.#field[i] = this.#processRow(this.#field[i]);
      }
    });
  }

  moveRight() {
    this.#makeMove(() => {
      for (let i = 0; i < 4; i++) {
        const reverseRow = [...this.#field[i]].reverse();

        this.#field[i] = this.#processRow(reverseRow).reverse();
      }
    });
  }

  moveUp() {
    this.#makeMove(() => {
      for (let j = 0; j < 4; j++) {
        const column = [
          this.#field[0][j],
          this.#field[1][j],
          this.#field[2][j],
          this.#field[3][j],
        ];
        const processed = this.#processRow(column);

        for (let i = 0; i < 4; i++) {
          this.#field[i][j] = processed[i];
        }
      }
    });
  }

  moveDown() {
    this.#makeMove(() => {
      for (let j = 0; j < 4; j++) {
        const column = [
          this.#field[3][j],
          this.#field[2][j],
          this.#field[1][j],
          this.#field[0][j],
        ];
        const processed = this.#processRow(column).reverse();

        for (let i = 0; i < 4; i++) {
          this.#field[i][j] = processed[i];
        }
      }
    });
  }

  getScore() {
    return this.#score;
  }

  getState() {
    return this.#cloneField(this.#field);
  }

  getStatus() {
    return this.#status;
  }

  start() {
    this.#status = 'playing';
    this.#addRandomTile();
    this.#addRandomTile();
  }

  restart() {
    this.#score = 0;
    this.#status = 'playing';
    this.#field = this.#createEmptyBoard();
    this.#addRandomTile();
    this.#addRandomTile();
  }

  #cloneField(field) {
    return field.map((row) => [...row]);
  }

  #createEmptyBoard() {
    return [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  }

  #addRandomTile() {
    const emptyCells = [];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.#field[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }

    if (emptyCells.length === 0) {
      return;
    }

    const [row, col] =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];

    this.#field[row][col] = Math.random() < 0.9 ? 2 : 4;
  }

  #fieldsEqual(a, b) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (a[i][j] !== b[i][j]) {
          return false;
        }
      }
    }

    return true;
  }

  #processRow(row) {
    const filtered = row.filter((val) => val !== 0);

    for (let i = 0; i < filtered.length - 1; i++) {
      if (filtered[i] === filtered[i + 1]) {
        filtered[i] *= 2;
        this.#score += filtered[i];
        filtered.splice(i + 1, 1);
      }
    }

    while (filtered.length < 4) {
      filtered.push(0);
    }

    return filtered;
  }

  #makeMove(callback) {
    if (this.#status !== 'playing') {
      return;
    }

    const oldField = this.getState();

    callback();

    if (!this.#fieldsEqual(oldField, this.#field)) {
      this.#addRandomTile();
      this.#updateStatus();
    }
  }

  #updateStatus() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.#field[i][j] === 2048) {
          this.#status = 'win';

          return;
        }
      }
    }

    this.#status = this.#hasMove() ? 'playing' : 'lose';
  }

  #hasMove() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const current = this.#field[i][j];

        if (current === 0) {
          return true;
        }

        if (j < 3 && current === this.#field[i][j + 1]) {
          return true;
        }

        if (i < 3 && current === this.#field[i + 1][j]) {
          return true;
        }
      }
    }

    return false;
  }
}

export default Game;
