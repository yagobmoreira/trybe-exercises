import Piece from "./Piece";
import { boardColumns, boardRows, BoardSquare, isBoardSquareInList } from "./utils";

export default class Rook extends Piece {
  type = "Torre";
  get availableMoves() {
      const column = this.position[0];
      const columnIndex = boardColumns.indexOf(column);

      const row = this.position[1];
      const rowIndex = boardRows.indexOf(row);

      let availableSquares: BoardSquare[] = [];

      // Adiciona todas as casas abaixo
      for (let i = rowIndex - 1; i >= 0; i--) {
          const square: BoardSquare = [boardColumns[columnIndex], boardRows[i]];
          if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
          availableSquares.push(square);
      }

      // Adiciona todas as casas acima
      for (let i = rowIndex + 1; i < 8; i++) {
          const square: BoardSquare = [boardColumns[columnIndex], boardRows[i]];
          if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
          if (isBoardSquareInList(square, availableSquares)) continue;
          availableSquares.push(square);
      }

      // Adiciona todas as casas na direita
      for (let i = columnIndex + 1; i < 8; i++) {
          const square: BoardSquare = [boardColumns[i], boardRows[rowIndex]];
          if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
          if (isBoardSquareInList(square, availableSquares)) continue;
          availableSquares.push(square);
      }

      // Adiciona todas as casas na esquerda
      for (let i = columnIndex - 1; i >= 0; i--) {
          const square: BoardSquare = [boardColumns[i], boardRows[rowIndex]];
          if (isBoardSquareInList(square, this.board.occupiedSquares)) break;
          if (isBoardSquareInList(square, availableSquares)) continue;
          availableSquares.push(square);
      }

      return availableSquares;
  }
}