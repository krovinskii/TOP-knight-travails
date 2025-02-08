// Use an **undirected graph** since the knight's movement is bidirectional.
// The only restriction is the knight's unique movement pattern; otherwise, movement is unrestricted.
// An undirected graph allows traversal in both directions efficiently.

// This project finds the shortest possible path for a knight on a chessboard.
// It takes two inputs: the starting position and the target position.
// Moves that go off the board or are invalid will be rejected.
// Chessboard is 8x8

//First we will create a vertex class. (Vertex is interchangeable with nodes)
class Vertex {
  constructor(position, possibleMoves) {
    //We pass the current position, which will be user defined, and possibleMoves which will be determined by a function outside of the constructor
    this.position = position;
    this.possibleMoves = {
      1: determineMoves(position).move1,
      2: determineMoves(position).move2,
      3: determineMoves(position).move3,
      4: determineMoves(position).move4,
      5: determineMoves(position).move5,
      6: determineMoves(position).move6,
      7: determineMoves(position).move7,
      8: determineMoves(position).move8,
    };
  }
}
const determineMoves = (position) => {
  //Position needs to be (x, y) format which would also be an array [0, 1]
  //Knight can move 2 squares horizontally(x) and 1 vertically(y)
  //Knight can move 2 squares vertically(y) and 1 horizontally(x)
  if (position.length !== 2) {
    console.log(
      "The position array in determineMoves() is not in [x, y] format"
    );
  }
  const move1 = (position) => {
    const newX = position[0] + 2;
    const newY = position[1] + 1;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("invalid move");
      return;
    }
    return [newX, newY];
  };
  const move2 = (position) => {
    const newX = position[0] + 2;
    const newY = position[1] - 1;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("invalid move");
      return;
    }
    return [newX, newY];
  };
  const move3 = (position) => {
    const newX = position[0] - 2;
    const newY = position[1] + 1;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("invalid move");
      return;
    }
    return [newX, newY];
  };
  const move4 = (position) => {
    const newX = position[0] - 2;
    const newY = position[1] - 1;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("invalid move");
      return;
    }
    return [newX, newY];
  };
  const move5 = (position) => {
    const newX = position[0] + 1;
    const newY = position[1] + 2;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("invalid move");
      return;
    }
    return [newX, newY];
  };
  const move6 = (position) => {
    const newX = position[0] + 1;
    const newY = position[1] - 2;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("invalid move");
      return;
    }
    return [newX, newY];
  };
  const move7 = (position) => {
    const newX = position[0] - 1;
    const newY = position[1] + 2;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("invalid move");
      return;
    }
    return [newX, newY];
  };
  const move8 = (position) => {
    const newX = position[0] - 1;
    const newY = position[1] - 2;
    if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
      console.log("invalid move");
      return;
    }
    return [newX, newY];
  };
  return [
    move1(),
    move2(),
    move3(),
    move4(),
    move5(),
    move6(),
    move7(),
    move8(),
  ];
};
