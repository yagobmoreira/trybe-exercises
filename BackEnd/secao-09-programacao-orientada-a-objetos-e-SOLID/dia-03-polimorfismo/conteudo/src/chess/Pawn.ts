import Piece from "./Piece";
import { BoardSquare, boardRows, isBoardSquareInList } from "./utils";

export default class Pawn extends Piece {
  type = 'Peão';
  get availableMoves() {
      const column = this.position[0];
      const row = this.position[1];
      const rowIndex = boardRows.indexOf(row);
      if (rowIndex === 7)
          return [];

      const nextSquare: BoardSquare = [column, boardRows[rowIndex + 1]];
      if (isBoardSquareInList(nextSquare, this.board.occupiedSquares))
          return [];

      return [nextSquare];
  }
}