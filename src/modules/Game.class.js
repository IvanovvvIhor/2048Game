/* eslint-disable max-len */
'use strict';

class Game {
  constructor(initialState) {
    this._field = initialState
      ? this._cloneField(initialState)
      : this._createEmptyBoard();
    this._score = 0;
    this._status = 'idle';
  }

  moveLeft() {
    this._makeMove(() => {
      for (let i = 0; i < 4; i++) {
        this._field[i] = this._processRow(this._field[i]);
      }
    });
  }

  moveRight() {
    this._makeMove(() => {
      for (let i = 0; i < 4; i++) {
        const reverseRow = [...this._field[i]].reverse();

        this._field[i] = this._processRow(reverseRow).reverse();
      }
    });
  }

  moveUp() {
    this._makeMove(() => {
      for (let j = 0; j < 4; j++) {
        const column = [this._field[0][j], this._field[1][j], this._field[2][j], this._field[3][j]];
        const processed = this._processRow(column);

        for (let i = 0; i < 4; i++) {
          this._field[i][j] = processed[i];
        }
      }
    });
  }

  moveDown() {
    this._makeMove(() => {
      for (let j = 0; j < 4; j++) {
        const column = [this._field[3][j], this._field[2][j], this._field[1][j], this._field[0][j]];
        const processed = this._processRow(column).reverse();

        for (let i = 0; i < 4; i++) {
          this._field[i][j] = processed[i];
        }
      }
    });
  }

  getScore() {
    return this._score;
  }

  getState() {
    return this._cloneField(this._field);
  }

  getStatus() {
    return this._status;
  }

  start() {
    this._status = 'playing';
    this._addRandomTile();
    this._addRandomTile();
  }

  restart() {
    this._score = 0;
    this._status = 'playing';
    this._field = this._createEmptyBoard();
    this._addRandomTile();
    this._addRandomTile();
  }

  _cloneField(field) {
    return field.map((row) => [...row]);
  }

  _createEmptyBoard() {
    return [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  }

  _addRandomTile() {
    const emptyCells = [];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this._field[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }

    if (emptyCells.length === 0) {
      return;
    }

    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    this._field[row][col] = Math.random() < 0.9 ? 2 : 4;
  }

  _fieldsEqual(a, b) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (a[i][j] !== b[i][j]) {
          return false;
        }
      }
    }

    return true;
  }

  _processRow(row) {
    const filtered = row.filter((val) => val !== 0);

    for (let i = 0; i < filtered.length - 1; i++) {
      if (filtered[i] === filtered[i + 1]) {
        filtered[i] *= 2;
        this._score += filtered[i];
        filtered.splice(i + 1, 1);
      }
    }

    while (filtered.length < 4) {
      filtered.push(0);
    }

    return filtered;
  }

  _makeMove(callback) {
    if (this._status !== 'playing') {
      return;
    }

    const oldField = this.getState();

    callback();

    if (!this._fieldsEqual(oldField, this._field)) {
      this._addRandomTile();
      this._updateStatus();
    }
  }

  _updateStatus() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this._field[i][j] === 2048) {
          this._status = 'win';

          return;
        }
      }
    }

    this._status = this._hasMove() ? 'playing' : 'lose';
  }

  _hasMove() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const current = this._field[i][j];

        if (current === 0) {
          return true;
        }

        if (j < 3 && current === this._field[i][j + 1]) {
          return true;
        }

        if (i < 3 && current === this._field[i + 1][j]) {
          return true;
        }
      }
    }

    return false;
  }
}

module.exports = Game;
