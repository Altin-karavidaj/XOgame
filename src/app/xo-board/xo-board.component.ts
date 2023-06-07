import { Component } from '@angular/core';

enum Player {
  X = 'X',
  O = 'O',
}

@Component({
  selector: 'app-xo-board',
  templateUrl: './xo-board.component.html',
  styleUrls: ['./xo-board.component.css'],
})
export class XoBoardComponent {
  board: (Player | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  currentPlayer: Player = Player.X;
  winner: Player | null = null;

  makeMove(row: number, col: number): void {
    if (!this.winner && this.board[row][col] === null) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWin(row, col)) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer =
          this.currentPlayer === Player.X ? Player.O : Player.X;
      }
    }
  }

  checkWin(row: number, col: number): boolean {
    const symbol = this.board[row][col];

    if (
      this.board[row][0] === symbol &&
      this.board[row][1] === symbol &&
      this.board[row][2] === symbol
    ) {
      return true;
    }

    if (
      this.board[0][col] === symbol &&
      this.board[1][col] === symbol &&
      this.board[2][col] === symbol
    ) {
      return true;
    }

    if (row === col) {
      if (
        this.board[0][0] === symbol &&
        this.board[1][1] === symbol &&
        this.board[2][2] === symbol
      ) {
        return true;
      }
    }

    if (row + col === 2) {
      if (
        this.board[0][2] === symbol &&
        this.board[1][1] === symbol &&
        this.board[2][0] === symbol
      ) {
        return true;
      }
    }

    return false;
  }

  resetGame(): void {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = Player.X;
    this.winner = null;
  }
}
