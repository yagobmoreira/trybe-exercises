let peca = "BISHOP";
let result = peca.toLowerCase();

switch (result) {
  case "bishop":
    console.log(result + " moves diagonally");
    break;
  case "king":
    console.log(result + " moves from its square to a neighboring square");
    break;
  case "rook":
    console.log(result + " can move in its line or row");
    break;
  case "queen":
    console.log(result + " may move like a Rook or a Bishop");
    break;
  case "knight":
    console.log(result + " jumps in making the shortest move that is not a straight one"
    );
    break;
  case "pawn":
    console.log(result + " moves one square straight ahead");
    break;
  default:
    console.log('Error')
    break;
}
